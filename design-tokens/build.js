const setupStyleDictionary = require("./src/setupStyleDictionary");

const themes = ["light", "light-hc", "dark", "dark-hc"];
const platforms = ["web", "android"];

(async () => {
  for (const theme of themes) {
    for (const platform of platforms) {
      const sb = await setupStyleDictionary(theme, platform);
      sb.buildAllPlatforms();
    }
  }
})();
