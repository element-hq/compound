

import '!style-loader!css-loader!@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css';
import '!style-loader!css-loader!../public/global.css';

import { Body, H1, H2, H3, H4, H5, H6 } from "@vector-im/compound-web";

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
        order: ['Overview', 'Foundations', 'Design', 'Develop', 'Styles', 'Components', '*'],
        locales: 'en-US',
    }
  },
  docs: {
    /**
     * See https://mdxjs.com/table-of-components/
     * for a list of the overridables components
     */
    components: {
      p: Body,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      li: ({ children, ...props }) => <Body {...props} as="li">{children}</Body>,
      a: ({ children, ...props }) => <Body {...props} as="a" style={{
        color: "var(--cpd-color-text-action-accent)"
      }}>{children}</Body>
    },
  },
}
