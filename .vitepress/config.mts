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
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const name = entry.name.replace(/\.md$/, "");

      return {
        text: name.charAt(0).toUpperCase() + name.slice(1),

        link: `/api/${name}`,
      };
    })
    .sort((a, b) => a.text.localeCompare(b.text));
}

export default defineConfig({
  title: "Berryaudio ",
  description: "Installation, getting started & development docs",
  appearance: false,
  themeConfig: {
    search: { provider: "local" },
    nav: [
      { text: "Home", link: "http://www.berryaudio.org" },
      {
        text: "Documentation",
        link: "/getting-started/introduction",
      },
      {
        text: "Community",
        link: "https://community.berryaudio.org",
      },
    ],

    sidebar: [
      {
        text: "Home",
        link: "http://www.berryaudio.org",
      },

      {
        text: "Getting started",
        collapsed: false,
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
        text: "Audio Sources",
        collapsed: false,
        items: [
          {
            text: "Library",
            link: "/audio-source/library",
          },
          {
            text: "Radio",
            link: "/audio-source/radio",
          },
          {
            text: "Radio Browser",
            link: "/audio-source/radio-browser",
          },
          {
            text: "Spotify",
            link: "/audio-source/spotify",
          },
          {
            text: "Soundcloud",
            link: "/audio-source/soundcloud",
          },
          {
            text: "FM Tuner",
            link: "#",
          },
          {
            text: "Line In",
            link: "#",
          },
          {
            text: "USB",
            link: "/audio-source/usbdac",
          },
          {
            text: "CD/DVD Drive ",
            link: "/audio-source/dvd-drive",
          },
          {
            text: "Storage Browser",
            link: "/audio-source/storage",
          },
          {
            text: "Multiroom",
            link: "/audio-source/multiroom",
          },
        ],
      },

      {
        text: "Audio Renderer",
        collapsed: false,
        items: [
          {
            text: "Spotify Connect",
            link: "#",
          },
          {
            text: "Airplay",
            link: "#",
          },
          {
            text: "Bluetooth",
            link: "#",
          },
        ],
      },

      {
        text: "Audio Output",
        collapsed: false,
        items: [
          {
            text: "DAC",
            link: "#",
          },
          {
            text: "Bluetooth",
            link: "#",
          },
          {
            text: "Web Browser",
            link: "#",
          },
        ],
      },

      {
        text: "Audio Processing",
        collapsed: false,
        items: [
          {
            text: "Digital Signal Processing",
            link: "#",
          },
          {
            text: "Parametric EQ",
            link: "#",
          },
          {
            text: "Filters",
            link: "#",
          },
          {
            text: "Effects",
            link: "#",
          },
          {
            text: "Processor",
            link: "#",
          },
        ],
      },

      {
        text: "Power State",
        collapsed: true,
        items: [
          {
            text: "Standby",
            link: "#",
          },
        ],
      },

      {
        text: "Display",
        collapsed: true,
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
        text: "Rotary Encoders",
        collapsed: true,
        items: [
          {
            text: "Generic HDMI",
            link: "#",
          },
        ],
      },

      {
        text: "GPIO Buttons",
        collapsed: true,
        items: [
          {
            text: "Raspberry Pi GPIO",
            link: "#",
          },
          {
            text: "MCP2017",
            link: "#",
          },
        ],
      },

      {
        text: "Development",
        collapsed: true,
        items: [
          {
            text: "Core Architecture",
            link: "/development/architecture",
          },
          {
            text: "Environment Setup",
            link: "/development/environment",
          },
          {
            text: "Build Extensions",
            link: "/development/extensions",
          },
        ],
      },

      {
        text: "API",
        collapsed: true,
        items: getApiPages(),
      },

      {
        text: "Support",

        items: [
          {
            text: "Community Forums",
            link: "https://community.berryaudio.org",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/berry-audio",
      },
      {
        icon: "instagram",
        link: "https://instagram.com/berryaudio.os",
      },
    ],
  },
});
