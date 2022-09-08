const { addons } = require('@storybook/addons');
const ElementTheme = require('./ElementTheme');

addons.setConfig({
  theme: ElementTheme,
});