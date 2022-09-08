/**
 * 
 * @param {string} valueKey - property name to set value to
 * @returns Dictionary
 */

const StyleDictionary = require("style-dictionary");

const themeDictionaryTransformer = (valueKey) => ({ dictionary }) => ({
    ...dictionary,
    allTokens: dictionary.allTokens.map(token => ({
        ...token,
        value: token[valueKey] || token.value
    }))
});

/**
 * 
 * @param {*} valueKey - property name to set value to
 * @param {string} format - built-in format key
 * @returns 
 */
const themeFormatter = (valueKey, format) => ({ dictionary, ...args }) => {
  const transformedDictionary = themeDictionaryTransformer(valueKey)({ dictionary });

  // Use the built-in format but with our customized dictionary object
  // so it will output the custom theme value instead of the value
  return StyleDictionary.format[format]({ ...args, dictionary: transformedDictionary })
}

module.exports = { themeFormatter };