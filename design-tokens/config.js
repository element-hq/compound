module.exports = {
  source: [`tokens/**/*.json`],
  // If you don't want to call the registerTransform method a bunch of times
  // you can override the whole transform object directly. This works because
  // the .extend method copies everything in the config
  // to itself, allowing you to override things. It's also doing a deep merge
  // to protect from accidentally overriding nested attributes.
  transform: {
    // Now we can use the transform 'myTransform' below
    myTransform: {
      type: "name",
      transformer: (token) => token.path.join("_").toUpperCase(),
    },
  },
  action: {
    colorsets: require("./src/colorset-action"),
  },
  // Same with formats, you can now write them directly to this config
  // object. The name of the format is the key.
  format: {
    myFormat: ({ dictionary }) => {
      return dictionary.allTokens
        .map((token) => `${token.name}: ${token.value}`)
        .join("\n");
    },
  },
  parsers: [
    {
      pattern: /\.json|\.tokens\.json|\.tokens$/,
      parse: ({ contents }) => {
        // replace $value with value so that style dictionary recognizes it
        const preparedContent = (contents || "{}")
          .replace(/"\$?value":/g, '"value":')
          // convert $description to comment
          .replace(/"\$?description":/g, '"comment":');
        //
        return JSON.parse(preparedContent);
      },
    },
  ],
  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["attribute/cti", "name/cti/kebab", "size/px"],
      files: [
        {
          destination: "assets/web/css/tokens.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: `web`,
      buildPath: "assets/web/js/",
      files: [
        {
          destination: `tokens.json`,
          format: `json/flat`,
        },
      ],
    },
    "ios-colorsets": {
      buildPath: "assets/ios/",
      transforms: ["attribute/cti", "name/cti/pascal", "attribute/color"],
      actions: [`colorsets`],
    },
    compose: {
      transformGroup: `compose`,
      files: [
        {
          destination: "assets/android/StyleDictionary.kt",
          format: "compose/object",
          className: "StyleDictionary",
          packageName: "io.element.compound.tokens",
        },
        {
          destination: "assets/android/StyleDictionaryWithReferences.kt",
          format: "compose/object",
          className: "StyleDictionary",
          packageName: "io.element.compound.tokens",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
