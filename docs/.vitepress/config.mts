import { defineConfig, DefaultTheme } from "vitepress";
import { version } from "../../package.json";
import {
  headTitle,
  headDescription,
  ogImage,
  ogUrl,
  contributing,
  github,
  releases,
  docTag,
  docContributing,
  docRelease,
  docGithub,
} from "./meta.mjs";

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const SessionForgeVersion = "1.0.0-dev";

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize("NFKD")
    // Remove accents
    .replace(rCombining, "")
    // Remove control characters
    .replace(rControl, "")
    // Replace special characters
    .replace(rSpecial, "-")
    // ensure it doesn't start with a number
    .replace(/^(\d)/, "_$1");

export default defineConfig({
  lang: "en-US",
  title: headTitle,
  description: headDescription,

  markdown: {
    theme: {
      dark: "one-dark-pro",
      light: "github-light",
    },

    attrs: {
      leftDelimiter: "%{",
      rightDelimiter: "}%",
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ["meta", { name: "theme-color", content: "#ffca28" }],
    ["link", { rel: "icon", href: "/icon.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: `Abhishek Biswas`,
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "sessionforge,PHP session management,File-based sessions,Session handling,Session storage,Open source PHP library,Session data management",
      },
    ],
    ["meta", { property: "og:title", content: headTitle }],
    ["meta", { property: "og:description", content: headDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: headTitle }],
    ["meta", { name: "twitter:description", content: headDescription }],
    ["link", { rel: "mask-icon", href: "/icon.svg", color: "#ffffff" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],

  themeConfig: {
    logo: "/icon.svg",
    editLink: {
      pattern: "https://github.com/biswas-abhi/sessionforge-docs/docs/:path",
      text: "Suggest changes to this page",
    },

    outline: [2, 3],

    socialLinks: [{ icon: "github", link: github }],

    footer: {
      message: "Released under the Apache-2.0.",
      copyright: "Copyright © 2024-present Abhishek Biswas",
    },

    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "Docs",
        items: [
          {
            text: `v${version}`,
            link: docTag,
          },
          {
            text: "Release Notes",
            link: docRelease,
          },
          {
            text: "Contributing",
            link: docContributing,
          },
          {
            text: "Github",
            link: docGithub,
          },
        ],
      },
      {
        text: `v${SessionForgeVersion}`,
        items: [
          {
            text: "Release Notes",
            link: releases,
          },
          {
            text: "Contributing",
            link: contributing,
          },
        ],
      },
    ],

    sidebar: {
      "/": [sidebarGuide()],
    },
  },
});

type SidebarGroup = DefaultTheme.SidebarItem;

function sidebarGuide(): SidebarGroup {
  return {
    text: "Guide",
    collapsed: false,
    items: [
      {
        text: "Why SessionForge",
        link: "/guide/",
      },
      {
        text: "Installation Guide",
        link: "/guide/installation",
      },
      {
        text: "Configuration Guide",
        link: "/guide/configuration",
      },
      {
        text: "Usage Guide",
        items: [
          { text: "Create New Session", link: "/guide/create" },
          { text: "Update Session", link: "/guide/update" },
          { text: "Delete Session", link: "/guide/delete" },
          { text: "Destroy Session", link: "/guide/destroy" },
          { text: "Get All Session Data", link: "/guide/get-data" },
          { text: "Get Individual Session Data", link: "/guide/get-key-data" },
        ],
      },
      {
        text: "Security",
        items: [
          { text: "Fallback System", link: "/guide/fallback" },
          { text: "Compress", link: "/guide/compress" },
          { text: "Encryption", link: "/guide/encryption" },
        ],
      },
      {
        text: "Benchmark",
        link: "/guide/benchmark",
      },
    ],
  };
}
