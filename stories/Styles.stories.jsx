import React from "react";
import tokens from "@vector-im/compound-design-tokens";

import IconsTokens from "@vector-im/compound-design-tokens/icons/$icons.json";

import SpacingComponent from "./components/Spacing";
import TypographyComponent from "./components/Typography";
import ColorComponent from "./components/Color";
import IconComponent from "./components/Icon";

export default {
  title: 'Styles/Styles',
  component: SpacingComponent | TypographyComponent | ColorComponent | IconComponent,
};

export const Spacing = () => <SpacingComponent tokens={tokens.light} />;
export const Typography = () => <TypographyComponent tokens={tokens.light} />;
export const Color = () => <ColorComponent tokens={tokens} />;
export const Icon = () => <IconComponent tokens={IconsTokens} />;



