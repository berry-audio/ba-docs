import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vitepress";

function getApiPages() {
  const apiDir = path.resolve("./api");

  if (!fs.existsSync(apiDir)) {
    return [];
  }

  return fs
    .readdirSync(apiDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".md")
    )
    .map((entry) => {
      const name = entry.name.replace(
        /\.md$/,
        ""
      );

      return {
        text:
          name.charAt(0).toUpperCase() +
          name.slice(1),

        link: `/api/${name}`,
      };
    })
    .sort((a, b) =>
      a.text.localeCompare(b.text)
    );
}

export default defineConfig({
  title: "Berryaudio",
  description: "Installation, getting started & development docs",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Getting Started",
        link: "/getting-started/introduction",
      },
      {
        text: "Development",
        link: "/development/architecture",
      },
      {
        text: "Community",
        link: "https://community.berryaudio.org",
      },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
          {
            text: "Introduction",
            link: "/getting-started/introduction",
          },
          {
            text: "Installation & Setup",
            link: "/getting-started/installation",
          },
          {
            text: "Supported Hardware",
            link: "/getting-started/supported-hardware",
          },
        ],
      },

      {
        text: "Development",
        items: [
          {
            text: "Architecture",
            link: "/development/architecture",
          },
          {
            text: "Environment",
            link: "/development/environment",
          },
          {
            text: "Extensions",
            link: "/development/extensions",
          },
        ],
      },

      {
        text: "Display",
        items: [
          {
            text: "Generic HDMI",
            link: "/display/generic-hdmi",
          },
          {
            text: "SSD1322 OLED (256×64)",
            link: "/display/ssd1322-oled",
          },
          {
            text: "SSD1306 OLED (128×64)",
            link: "/display/ssd1306-oled",
          },
          {
            text: 'Waveshare 2.8" DSI LCD (480×640)',
            link: "/display/waveshare-28-dsi-lcd",
          },
        ],
      },

      {
        text: "API",
        items: getApiPages(),
      },

      {
        text: "Community",
        items: [
          {
            text: "Forums",
            link: "https://www.berryaudio.org",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/berry-audio",
      },
    ],
  },
});
