const glob = require("fast-glob");

const getWebPlatformConfig = require("./getWebPlatformConfig");

module.exports = function (theme, platform) {
  const config = {
    platforms: {},
  };

  if (theme === "light") {
    config.source = glob.sync([
      "tokens/**/*.json",
      "!tokens/**/platform-*.json",
      "!tokens/**/theme-*.json",
      `tokens/**/platform-${platform}.json`,
      `tokens/**/theme-${theme}.json`,
    ]);
  } else {
    config.source = glob.sync([`tokens/**/theme-${theme}.json`]);
  }

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
