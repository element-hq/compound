module.exports = {
  "stories": [
    "../stories/Overview.stories.mdx", // Index page
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-designs"],
  "staticDirs": ['../public'],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
