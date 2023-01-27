const commonTransforms = [
  "ts/resolveMath",
  "ts/size/px",
  "ts/size/letterspacing",
  // "ts/color/hexrgba",
  "ts/typography/shorthand",
  "ts/shadow/shorthand",
  "attribute/cti",
  "color/hex",
];

const prefix = "cpd";

module.exports = function (target, theme) {
  if (target !== "css" && target !== "js") {
    throw `Unsupport web platform: ${target}`;
  }

  return {
    transformGroup: `tokens-${target}`,
    prefix,
    transforms: [
      ...commonTransforms,
      target === "css" ? "name/cti/kebab" : "camelCaseDecimal",
    ],
    buildPath: `assets/web/${target}/`,
    files: [
      {
        destination: `${theme}.${target}`,
        format: target === "css" ? "css/variables" : "javascript/es6",
      },
    ],
  };
};
