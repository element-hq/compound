const glob = require("fast-glob");

const getWebPlatformConfig = require("./platformConfigs/getWebConfig");

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
      config.platforms.js = getWebPlatformConfig("js", theme);
      config.platforms.css = getWebPlatformConfig("css", theme);
      break;
    default:
      throw `Unsupported platform: ${platform}`;
  }

  return config;
};
