const ElementTheme =  require('./ElementTheme');

module.exports = {
  "stories": [
    "../stories/**/*.stories.md",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs"
  ],
  "staticDirs": ['../public'],
  "framework": "@storybook/react"
}
