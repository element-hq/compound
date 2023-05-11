import React from "react";

import IconsTokens from "@vector-im/compound-design-tokens/icons/$icons.json";

import IconComponent from "./components/Icon";

export default {
  title: 'Styles/Styles',
  component:  IconComponent,
};

export const Icon = () => <IconComponent tokens={IconsTokens} />;
