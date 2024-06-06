import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Sentrix",
    };
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </>
  ),
  logo: <span>Sentrix Security Docs</span>,
  chat: {
    link: "https://discord.gg/sentrix",
  },
  footer: {
    text: "© 2023 - " + new Date().getFullYear() + " Sentrix Security",
  },
  feedback: { content: "" },
  editLink: { text: "" },
  gitTimestamp: <></>,
};

export default config;
