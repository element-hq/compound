/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";

import "@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css";

// import { Body, H1, H2, H3, H4, H5, H6 } from "@vector-im/compound-web";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Overview",
        "Foundations",
        "Design",
        "Develop",
        "Styles",
        "Components",
        "*",
      ],
      locales: "en-US",
    },
  },
  docs: {
    /**
     * See https://mdxjs.com/table-of-components/
     * for a list of the overridables components
     */
    components: {
      p: ({ children }) => (
        <p style={{ font: "var(--cpd-font-body-md-regular)" }}>{children}</p>
      ),
      h1: ({ children }) => (
        <h1 style={{ font: "var(--cpd-font-heading-xl-semibold)" }}>
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 style={{ font: "var(--cpd-font-heading-lg-semibold)" }}>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 style={{ font: "var(--cpd-font-heading-md-semibold)" }}>
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 style={{ font: "var(--cpd-font-heading-sm-semibold)" }}>
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 style={{ font: "var(--cpd-font-body-lg-semibold)" }}>{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 style={{ font: "var(--cpd-font-body-md-semibold)" }}>{children}</h6>
      ),
      li: ({ children }) => (
        <li style={{ font: "var(--cpd-font-body-md-regular" }}>{children}</li>
      ),
      a: ({ children, ...props }) => (
        <a
          {...props}
          style={{
            color: "var(--cpd-color-text-action-accent)",
            font: "var(--cpd-font-body-md-regular",
            textDecoration: "underline",
          }}
        >
          {children}
        </a>
      ),
    },
  },
};
export const tags = ["autodocs"];
