const _ = require("lodash");

/**
 * A transformer to change tokens.0_5x and keep the underscore
 * after a camel case operation
 */
module.exports = {
  type: "name",
  transformer: function (token, options) {
    const underscore = "ThisShouldBeAnUnderscore";
    const name = [options.prefix].concat(token.path).join(" ");
    return _.camelCase(name.replaceAll("_", underscore)).replace(
      underscore,
      "_"
    );
  },
};
