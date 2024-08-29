// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Capella DataStudio",
  tagline:
    "A community supported, free, cool data management tool with a single pane of glass UI for Capella Operational, Capella Columnar and Couchbase Server Clusters",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://capelladatastudio.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Couchbase", // Usually your GitHub org/user name.
  projectName: "CapellaDataStudio", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/DataStudio-social-card.jpg",
      navbar: {
        title: "Capella DataStudio",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://www.couchbase.com/community-license-agreement04272021/",
            position: "left",
            label: "License",
          },
          {
            href: "https://youtu.be/TgNMSilI0WE/",
            position: "left",
            label: "Video Tutorial",
          },
          {
            href: "https://github.com/couchbaselabs/CapellaDataStudioBuilds",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community Support",
            items: [
              {
                label: "Couchbase Forums",
                href: "https://www.couchbase.com/forums/",
              },
              {
                label: "Discord",
                href: "https://bit.ly/3JGCeUg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/couchbaselabs/CapellaDataStudioBuilds",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Couchbase, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["json"],
      },
    }),
};

export default config;
