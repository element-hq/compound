const { create } =  require('@storybook/theming/create');

const cpdLight = require('@vector-im/compound-design-tokens/assets/web/js/cpdLight');

console.error(cpdLight.cpdColorTextPrimary);

module.exports = create({
    base: 'light',
    brandTitle: 'Compound',
    brandUrl: 'https://vector-im.github.io/compound/',
    brandImage: 'https://element.io/images/logo-ele-secondary.svg',
    brandTarget: '_self',


    /*
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'My custom Storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandTarget: '_self',

    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
    */
});
