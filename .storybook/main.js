module.exports = {
  "stories": ["../stories/Overview.mdx", "../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "staticDirs": ['../public'],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  },
  refs: {
    'compound-web': {
      title: 'Components',
      url: 'https://compound-web.pages.dev',
      expanded: false
    }
  }
};
