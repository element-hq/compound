import React from "react";
import tokens from "@vector-im/compound-design-tokens";

import SpacingComponent from "./components/Spacing";
import TypographyComponent from "./components/Typography";
import ColorComponent from "./components/Color";

export default {
  title: 'Styles/Styles',
  component: SpacingComponent | TypographyComponent | ColorComponent,
};

export const Spacing = () => <SpacingComponent tokens={tokens.light} />;
export const Typography = () => <TypographyComponent tokens={tokens.light} />;
export const Color = () => <ColorComponent tokens={tokens} />;



