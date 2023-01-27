const StyleDictionary = require("style-dictionary").extend("config.js");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

const camelCaseDecimal = require("./camelCaseDecimal");
const getStyleDictionaryConfig = require("./getStyleDictionaryConfig");

module.exports = async function (theme, platform) {
  const sb = StyleDictionary.extend(getStyleDictionaryConfig(theme, platform));
  await registerTransforms(sb);
  sb.registerTransform({
    name: "camelCaseDecimal",
    ...camelCaseDecimal,
  });
  return sb;
};
