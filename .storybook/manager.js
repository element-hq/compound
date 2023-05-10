const { addons } = require('@storybook/manager-api');
const ElementTheme = require('./ElementTheme');

addons.setConfig({
  theme: ElementTheme,
  showToolbar: false,
  showPanel: true,
  enableShortcuts: true,
  initialActive: 'sidebar',
});
