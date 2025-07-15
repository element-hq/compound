/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */
import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: [
    "../stories/Overview.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  refs: {
    "compound-web": {
      title: "Components",
      url: "https://compound-web.pages.dev",
      expanded: false,
    },
  },
} satisfies StorybookConfig;
