const fs = require("fs");
const path = require("path");

const transformers = require("style-dictionary/lib/common/transforms");

const CONTENTS = {
  info: {
    author: "xcode",
    version: 1,
  },
};

const createDir = (path) => {
  try {
    fs.mkdirSync(path, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
};

module.exports = {
  do: (dictionary, { buildPath }) => {
    const assetPath = path.join(buildPath, "DesignTokens.xcassets");

    createDir(assetPath);
    fs.writeFileSync(`${assetPath}/Contents.json`, JSON.stringify(CONTENTS));

    const colorTransformer = transformers["attribute/color"].transformer;

    dictionary.allProperties
      .filter((token) => {
        return token.$type === `color`;
      })
      .forEach((token) => {
        const colorsetPath = `${assetPath}/${token.name}.colorset`;
        createDir(colorsetPath);

        const { rgb } = colorTransformer(token);

        fs.writeFileSync(
          `${colorsetPath}/Contents.json`,
          JSON.stringify({
            colors: [
              {
                idiom: "universal",
                color: {
                  "color-space": `srgb`,
                  components: {
                    red: `${rgb.r}`,
                    green: `${rgb.g}`,
                    blue: `${rgb.b}`,
                    alpha: `${rgb.a}`,
                  },
                },
              },
            ],
            ...CONTENTS,
          })
        );
      });
  },
  undo: function () {},
};
