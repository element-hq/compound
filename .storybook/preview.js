import '!style-loader!css-loader!@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css';
import '!style-loader!css-loader!../public/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['Compound', 'Foundations', 'Design', 'Develop', 'Styles', 'Components', '*'],
        locales: 'en-US',
    }
},
}
