const glob = require("fast-glob");

const getWebConfig = require("./platformConfigs/getWebConfig");
const getAndroidConfig = require("./platformConfigs/getAndroidConfig");

module.exports = function (theme, platform) {
  const config = {
    platforms: {},
  };

  config.source = glob.sync([
    "tokens/cross-platform.json",
    `tokens/platform-${platform}.json`,
    `tokens/theme-${theme}.json`,
    `tokens/theme-semantics.json`,
  ]);

  switch (platform) {
    case "web":
      config.platforms.js = getWebConfig("js", theme);
      config.platforms.css = getWebConfig("css", theme);
      break;
    case "android":
      config.platforms.compose = getAndroidConfig(theme);
      break;
    default:
      throw `Unsupported platform: ${platform}`;
  }

  return config;
};
