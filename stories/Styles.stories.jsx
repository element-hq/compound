import React from "react";
import tokens from "@vector-im/compound-design-tokens";

import IconsTokens from "@vector-im/compound-design-tokens/icons/$icons.json";

import SpacingComponent from "./components/Spacing";
import IconComponent from "./components/Icon";

export default {
  title: 'Styles/Styles',
  component: SpacingComponent | IconComponent,
};

export const Spacing = () => <SpacingComponent tokens={tokens.light} />;
export const Icon = () => <IconComponent tokens={IconsTokens} />;



