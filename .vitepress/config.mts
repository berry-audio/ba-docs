import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Berryaudio",
  description: "Installation, getting started & development docs",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/introduction" },
      { text: "Development", link: "/development/architecture" },
      { text: "Community", link: "https://community.berryaudio.org" },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Installation & Setup", link: "/getting-started/installation" },
          { text: "Supported Hardware", link: "/getting-started/supported-hardware" },
        ],
      },

      {
        text: "Development",
        items: [
          { text: "Architecture", link: "/development/architecture" },
          { text: "Environment", link: "/development/environment" },
          { text: "Extensions", link: "/development/extensions" },
        ],
      },

      {
        text: "Extensions",
        items: [
          { text: "Bluetooth", link: "/extensions/bluetooth" },
          { text: "Mixer", link: "/extensions/mixer" },
          { text: "Playback", link: "/extensions/playback" },
          { text: "System", link: "/extensions/system" },
          { text: "Spotify", link: "/extensions/spotify" },
          { text: "Airplay", link: "/extensions/airplay" },
          { text: "Snapcast", link: "/extensions/snapcast" },
          { text: "Radio", link: "/extensions/radio" },
          { text: "Network", link: "/extensions/network" },
          { text: "Tracklist", link: "/extensions/tracklist" },
          { text: "Library", link: "/extensions/library" },
          { text: "Storage", link: "/extensions/storage" },
        ],
      },

      {
        text: "Community",
        items: [{ text: "Forums", link: "https://www.berryaudio.org" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/berry-audio" }],
  },
});
