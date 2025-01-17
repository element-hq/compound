/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { create } from "@storybook/theming/create";
import * as cpdLight from "@vector-im/compound-design-tokens/assets/web/js/cpdLight";

export default create({
  base: "light",
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
  fontCode:
    "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",

  brandTitle: "Compound",
  brandUrl: "https://compound.element.io",
  brandImage: "/logo.svg",
  brandTarget: "_self",

  //
  colorPrimary: cpdLight.cpdColorTextPrimary,
  colorSecondary: cpdLight.cpdColorBgActionPrimaryRest,

  // UI
  appBg: cpdLight.cpdColorBgCanvasDefault,
  appContentBg: cpdLight.cpdColorBgCanvasDefault,
  appBorderColor: cpdLight.cpdColorBorderInteractiveSecondary,
  appBorderRadius: 4,
  // Text colors
  textColor: cpdLight.cpdColorTextPrimary,
  textInverseColor: cpdLight.cpdColorTextOnSolidPrimary,
  // Toolbar default and active colors
  barTextColor: cpdLight.cpdColorTextPrimary,
  barSelectedColor: cpdLight.cpdColorTextInfoPrimary,
  barBg: cpdLight.cpdColorBgCanvasDefault,
  // Form colors
  inputBg: cpdLight.cpdColorBgCanvasDefault,
  inputBorder: cpdLight.cpdColorBorderInteractivePrimary,
  inputTextColor: cpdLight.cpdColorTextActionPrimary,

  inputBorderRadius: 32,
});
