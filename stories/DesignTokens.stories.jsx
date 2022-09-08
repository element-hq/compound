import React from 'react';

import { DesignTokens } from './DesignTokens';

export default {
  title: 'Design tokens',
  component: DesignTokens,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <DesignTokens {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Tokens = Template.bind({});

