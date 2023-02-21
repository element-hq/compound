const ElementTheme = require('./ElementTheme');
module.exports = {
  "stories": ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|ts|tsx)"],
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