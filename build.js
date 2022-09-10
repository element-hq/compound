const StyleDictionary = require('style-dictionary');
const fs = require('fs-extra');
const { themeFormatter } = require('./formats/theme');

const iosPath = `ios/dist/`;
const androidPath = `android/styledictionary/src/main/res/`;
const webPath = `web/dist/`;

// before this runs we should clean the directories we are generating files in
// to make sure they are ✨clean✨
console.log(`cleaning ${iosPath}...`);
fs.removeSync(iosPath);
console.log(`cleaning ${androidPath}...`);
fs.removeSync(androidPath);
console.log(`cleaning ${webPath}...`);
fs.removeSync(webPath);

StyleDictionary.extend({
  // custom actions
  action: {
    generateColorsets: require('./actions/ios/colorsets'),
    generateGraphics: require('./actions/generateGraphics'),
  },
  // custom transforms
  transform: {
    'attribute/cti': require('./transforms/attributeCTI'),
    'colorRGB': require('./transforms/colorRGB'),
    'size/remToFloat': require('./transforms/remToFloat')
  },
  // custom formats
  format: {
    swiftColor: require('./formats/swiftColor'),
    swiftColorUIKit: require('./formats/swiftColorUIKit'),
    swiftImage: require('./formats/swiftImage'),
    androidDark: themeFormatter(`darkValue`, `android/resources`),
    cssDark: themeFormatter(`darkValue`, `css/variables`),
    cssHcDark: themeFormatter(`hcValue`, `css/variables`),
    cssHc: themeFormatter(`hcDarkValue`, `css/variables`),
  },
  
  source: [
    `tokens/**/*.json5`
  ],
  
  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: webPath,
      prefix: "cpd",
      files: [{
          destination: `variables.css`,
          format: `css/variables`,
          filter: (token) => token.attributes.category === `color` && token.attributes.type !== `core`,
          options: {
            outputReferences: true
          }
      },{
        destination: `variables-light.css`,
        format: `css/variables`,
        filter: (token) => token.attributes.type === `core` && token.attributes.category === `color`
      },{
        destination: `variables-dark.css`,
        format: `cssDark`,
        filter: (token) => token.attributes.category === `color`
      },{
        destination: `variables-hc.css`,
        format: `cssHc`,
        filter: (token) => token.attributes.category === `color`
      },{
        destination: `variables-hc-dark.css`,
        format: `cssHcDark`,
        filter: (token) => token.attributes.category === `color`
      }]
    },
    
    js: {
      transformGroup: `web`,
      buildPath: webPath,
      files: [{
        destination: `tokens.json`,
        format: `json/flat`
      }]
    },
    
    assets: {
      transforms: [`attribute/cti`,`color/hex`,`size/remToFloat`,`name/ti/camel`],
      buildPath: `${webPath}/images/`,
      iosPath,
      androidPath,
      actions: [`generateGraphics`]
    },
    
    iOSColors: {
      buildPath: iosPath,
      transforms: [`attribute/cti`,`colorRGB`,`name/ti/camel`],
      actions: [`generateColorsets`]
    },
    
    iOSUIKit: {
      buildPath: iosPath,
      transforms: [`attribute/cti`,`name/ti/camel`,`size/swift/remToCGFloat`],
      files: [{
        destination: `UIColor.swift`,
        format: `swiftColorUIKit`,
        filter: (token) => token.attributes.category === `color`,
        options: {
          outputReferences: true
        }
      }]
    },
    
    iOS: {
      buildPath: iosPath,
      transforms: [`attribute/cti`,`name/ti/camel`,`size/swift/remToCGFloat`],
      files: [{
        destination: `Color.swift`,
        format: `swiftColor`,
        filter: (token) => token.attributes.category === `color`,
        options: {
          outputReferences: true
        }
      },{
        destination: `Size.swift`,
        filter: (token) => token.attributes.category === `size`,
        className: `Size`,
        format: `ios-swift/class.swift`
      },{
        destination: `Image.swift`,
        filter: (token) => token.attributes.category === `image`,
        format: `swiftImage`
      }]
    },
    
    android: {
      transformGroup: `android`,
      buildPath: androidPath,
      files: [{
        destination: `values/colors.xml`,
        format: `android/resources`,
        filter: (token) => token.attributes.category === `color`,
        options: {
          // this is important!
          // this will keep token references intact so that we don't need
          // to generate *all* color resources for dark mode, only
          // the specific ones that change
          outputReferences: true
        },
      },{
        // Here we are outputting a 'night' resource file that only has
        // the colors that have dark values. All the references
        // from the above file will properly reference
        // these colors if the OS is set to night mode.
        destination: `values-night/colors.xml`,
        format: `androidDark`,
        filter: (token) => token.darkValue && token.attributes.category === `color`
      },{
        destination: `values/font_dimens.xml`,
        filter: (token) => token.attributes.category === `size` &&
          token.attributes.type === `font`,
        format: `android/resources`
      },{
        destination: `values/dimens.xml`,
        filter: (token) => token.attributes.category === `size` &&
          token.attributes.type !== `font`,
        format: `android/resources`
      }]
    }
  }
}).buildAllPlatforms();