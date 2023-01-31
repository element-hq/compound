const commonTransforms = [
  "ts/resolveMath",
  "ts/size/letterspacing",
  "ts/color/hexrgba",
  "ts/typography/shorthand",
  "ts/shadow/shorthand",
  "attribute/cti",
  "color/composeColor",
];

const prefix = "cpd";

module.exports = function (theme) {
  return {
    transformGroup: `tokens-android`,
    prefix,
    transforms: [...commonTransforms, "camelCaseDecimal"],
    buildPath: `assets/android/kotlin/`,
    files: [
      {
        destination: `${theme}.kt`,
        format: "compose/object",
        className: "CompoundDesignTokens",
        packageName: "io.element.compound.tokens",
        options: {
          showFileHeader: false,
          outputReferences: true,
        },
      },
    ],
  };
};
