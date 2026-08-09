import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const BRUNO_ROOT = path.resolve("./bruno");
const API_ROOT = path.resolve("./api");

const START_MARKER = "<!-- API Block Starts -->";
const END_MARKER = "<!-- API Block Ends -->";

function findYamlFiles(dir: string): string[] {
  const files: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Don't process the Meta directory as Bruno request files
      if (entry.name.toLowerCase() === "meta") {
        continue;
      }

      files.push(...findYamlFiles(fullPath));
      continue;
    }

    // Ignore Bruno folder metadata
    if (entry.name === "folder.yml") {
      continue;
    }

    if (entry.name.endsWith(".yml") || entry.name.endsWith(".yaml")) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseJson(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function findMetaFile(
  sourceFolder: string,
  methodName: string
): string | null {
  const metaFile = path.join(
    sourceFolder,
    "meta",
    `${methodName}.yml`
  );

  if (fs.existsSync(metaFile)) {
    return metaFile;
  }

  return null;
}

function generateRequestTable(meta: any): string {
  const parameters = meta?.request?.parameters;

  if (!Array.isArray(parameters) || parameters.length === 0) {
    return "";
  }

  let table = `| Parameter | Type | Required | Value | Description |
| --- | --- | --- | --- | --- |
`;

  for (const parameter of parameters) {
    /*
     * Main parameter row
     */
    table += `| \`${parameter.name ?? ""}\` | ${
      parameter.type ?? "-"
    } | ${
      parameter.required ? "Yes" : "No"
    } | ${
      parameter.value !== undefined
        ? `\`${parameter.value}\``
        : "-"
    } | ${
      parameter.description ?? "-"
    } |
`;

    /*
     * Additional value rows.
     *
     * These intentionally leave the Parameter,
     * Type and Required columns empty.
     */
    if (Array.isArray(parameter.values)) {
      for (const value of parameter.values) {
        table += `| | | | ${
          value.value !== undefined
            ? `\`${value.value}\``
            : "-"
        } | ${
          value.description ?? "-"
        } |
`;
      }
    }
  }

  return table;
}

function generateResponseTable(meta: any): string {
  const parameters = meta?.response?.parameters;

  if (!Array.isArray(parameters) || parameters.length === 0) {
    return "";
  }

  let table = `| Parameter | Type | Value | Description |
| --- | --- | --- | --- |
`;

  for (const parameter of parameters) {
    /*
     * Main parameter row
     */
    table += `| \`${parameter.name ?? ""}\` | ${
      parameter.type ?? "-"
    } | ${
      parameter.value !== undefined
        ? `\`${parameter.value}\``
        : "-"
    } | ${
      parameter.description ?? "-"
    } |
`;

    /*
     * Additional value rows.
     *
     * These intentionally leave the Parameter
     * and Type columns empty.
     */
    if (Array.isArray(parameter.values)) {
      for (const value of parameter.values) {
        table += `| | | ${
          value.value !== undefined
            ? `\`${value.value}\``
            : "-"
        } | ${
          value.description ?? "-"
        } |
`;
      }
    }
  }

  return table;
}

function getRequestDocs(data: any): string {
  /*
   * Request-level Bruno docs are stored directly
   * as a Markdown string:
   *
   * docs: |-
   *   ### Sets the mixer volume again
   *
   *   my markdown description here
   */
  if (typeof data?.docs === "string") {
    return data.docs.trim();
  }

  return "";
}

function generateApiBlock(
  file: string,
  sourceFolder: string
): string {
  const content = fs.readFileSync(file, "utf8");
  const data = YAML.parse(content);

  console.log(
    `   Processing ${path.relative(BRUNO_ROOT, file)}`
  );

  const fullMethod = data?.info?.name;

  if (!fullMethod) {
    console.warn("   ⚠️ Skipping: no info.name");
    return "";
  }

  /*
   * Load metadata.
   *
   * Meta files are only used for structured
   * request/response documentation.
   */
  const metaFile = findMetaFile(
    sourceFolder,
    fullMethod
  );

  let meta = null;

  if (metaFile) {
    console.log(
      `      Metadata: ${path.relative(BRUNO_ROOT, metaFile)}`
    );

    meta = YAML.parse(
      fs.readFileSync(metaFile, "utf8")
    );
  } else {
    console.warn(
      `      ⚠️ No metadata found for ${fullMethod}`
    );
  }

  /*
   * Description
   *
   * Bruno's request docs field contains
   * Markdown directly.
   */
  const description = getRequestDocs(data);

  /*
   * Request
   */
  const request = parseJson(
    data.http?.body?.data
  );

  if (!request) {
    console.warn(
      `   ⚠️ Skipping ${fullMethod}: no http.body.data`
    );

    return "";
  }

  /*
   * Response
   */
  const example = data.examples?.[0];

  const response = parseJson(
    example?.response?.body?.data
  );

  /*
   * Tables
   */
  const requestTable =
    generateRequestTable(meta);

  const responseTable =
    generateResponseTable(meta);

  /*
   * Build Markdown
   */
  let block = `### ${fullMethod} {.sr-only}

<ApiCollapse heading="${fullMethod}">
<template #title>${fullMethod}</template>

`;

  /*
   * Insert request documentation exactly
   * as authored in Bruno.
   */
  if (description) {
    block += `${description}

`;
  }

  /*
   * Request section
   */
  block += `<ApiRequest/>

\`\`\`json
${JSON.stringify(request, null, 2)}
\`\`\`

`;

  /*
   * Request parameters table
   */
  if (requestTable) {
    block += `${requestTable}

`;
  }

  /*
   * Response section
   */
  block += `<ApiResponse/>

`;

  if (response !== null) {
    block += `\`\`\`json
${JSON.stringify(response, null, 2)}
\`\`\`

`;

    /*
     * Response parameters table
     */
    if (responseTable) {
      block += `${responseTable}

`;
    }
  }

  block += `</ApiCollapse>
`;

  return block;
}

function readFolderInfo(folderPath: string) {
  const folderFile = path.join(
    folderPath,
    "folder.yml"
  );

  if (!fs.existsSync(folderFile)) {
    return {
      name: path.basename(folderPath),
      docs: ""
    };
  }

  const content = fs.readFileSync(
    folderFile,
    "utf8"
  );

  const data = YAML.parse(content);

  return {
    name:
      data?.info?.name ||
      path.basename(folderPath),

    docs:
      data?.docs?.content?.trim() ||
      ""
  };
}

/*
 * Update the folder-level documentation.
 *
 * The folder docs are everything between:
 *
 *   API documentation for <name>.
 *
 * and:
 *
 *   ## Methods
 *
 * This function ALWAYS replaces that section.
 *
 * If folder.yml has no docs, the old docs are removed.
 */
function updateFolderDocs(
  document: string,
  title: string,
  folderDocs: string
): string {
  const descriptionLine =
    `API documentation for ${title}.`;

  const descriptionIndex =
    document.indexOf(descriptionLine);

  if (descriptionIndex === -1) {
    return document;
  }

  const descriptionEnd =
    descriptionIndex +
    descriptionLine.length;

  /*
   * Find the Methods heading after the
   * API description.
   */
  const methodsIndex =
    document.indexOf(
      "## Methods",
      descriptionEnd
    );

  /*
   * If we have an existing Methods section,
   * replace everything between the description
   * and Methods.
   */
  if (methodsIndex !== -1) {
    const before =
      document.slice(
        0,
        descriptionEnd
      );

    const after =
      document.slice(
        methodsIndex
      );

    const docs =
      folderDocs
        ? `\n\n${folderDocs}\n\n`
        : "\n\n";

    return before + docs + after;
  }

  /*
   * If there is no Methods heading yet,
   * remove everything after the API description
   * and rebuild the expected structure.
   */
  const before =
    document.slice(
      0,
      descriptionEnd
    );

  const docs =
    folderDocs
      ? `\n\n${folderDocs}\n`
      : "\n";

  return (
    before +
    docs +
    "\n## Methods\n\n" +
    START_MARKER +
    "\n\n" +
    END_MARKER +
    "\n"
  );
}

function generateFolder(folderName: string) {
  const sourceFolder = path.join(
    BRUNO_ROOT,
    folderName
  );

  /*
   * Read folder.yml
   */
  const folderInfo =
    readFolderInfo(sourceFolder);

  const title = folderInfo.name;
  const folderDocs = folderInfo.docs;

  const yamlFiles = findYamlFiles(
    sourceFolder
  );

  console.log(`\n📦 ${folderName}`);
  console.log(
    `   Name: ${title}`
  );
  console.log(
    `   Found ${yamlFiles.length} YAML files`
  );

  const blocks = yamlFiles
    .map((file) =>
      generateApiBlock(
        file,
        sourceFolder
      )
    )
    .filter(Boolean)
    .join("\n");

  if (!blocks) {
    console.warn(
      `   ⚠️ No API blocks generated`
    );

    return;
  }

  const outputFile = path.join(
    API_ROOT,
    `${folderName.toLowerCase()}.md`
  );

  fs.mkdirSync(
    API_ROOT,
    { recursive: true }
  );

  let document: string;

  if (fs.existsSync(outputFile)) {
    document = fs.readFileSync(
      outputFile,
      "utf8"
    );
  } else {
    document = `# ${title}

API documentation for ${title}.

${folderDocs ? `${folderDocs}\n\n` : ""}## Methods

${START_MARKER}

${END_MARKER}
`;
  }

  /*
   * Update the title.
   */
  if (!document.trimStart().startsWith("# ")) {
    document = `# ${title}

${document}`;
  } else {
    document = document.replace(
      /^# .+$/m,
      `# ${title}`
    );
  }

  /*
   * Make sure the API description exists.
   */
  const apiDescription =
    `API documentation for ${title}.`;

  const firstHeadingEnd =
    document.indexOf("\n");

  if (firstHeadingEnd !== -1) {
    const afterTitle =
      document.slice(
        firstHeadingEnd + 1
      );

    if (
      !afterTitle.startsWith(
        `\n${apiDescription}`
      ) &&
      !afterTitle.startsWith(
        apiDescription
      )
    ) {
      document =
        document.slice(
          0,
          firstHeadingEnd + 1
        ) +
        `\n${apiDescription}\n` +
        document.slice(
          firstHeadingEnd + 1
        );
    }
  }

  /*
   * ALWAYS update folder.yml docs.
   *
   * If folder.yml contains:
   *
   * docs:
   *   content: ...
   *
   * the content is inserted.
   *
   * If docs/content is removed from folder.yml,
   * the old generated content is removed as well.
   */
  document =
    updateFolderDocs(
      document,
      title,
      folderDocs
    );

  /*
   * Add markers if they don't exist.
   */
  if (
    !document.includes(START_MARKER) ||
    !document.includes(END_MARKER)
  ) {
    document = `${document.trimEnd()}

## Methods

${START_MARKER}

${END_MARKER}
`;
  }

  const start = document.indexOf(
    START_MARKER
  );

  const end = document.indexOf(
    END_MARKER
  );

  /*
   * Replace generated API section.
   */
  document =
    document.slice(
      0,
      start + START_MARKER.length
    ) +
    "\n\n" +
    blocks +
    "\n" +
    document.slice(end);

  fs.writeFileSync(
    outputFile,
    document
  );

  console.log(
    `   ✅ Generated ${outputFile}`
  );
}

if (!fs.existsSync(BRUNO_ROOT)) {
  console.error(
    `❌ Bruno folder not found: ${BRUNO_ROOT}`
  );

  process.exit(1);
}

const folders = fs
  .readdirSync(BRUNO_ROOT, {
    withFileTypes: true
  })
  .filter(
    (entry) => entry.isDirectory()
  );

console.log(
  `🚀 Found ${folders.length} Bruno folders`
);

for (const folder of folders) {
  generateFolder(
    folder.name
  );
}
