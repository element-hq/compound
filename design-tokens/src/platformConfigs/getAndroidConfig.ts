import { Platform } from "style-dictionary/types/Platform";
import { Theme } from "../@types";

const prefix = "cpd";

export default function getAndroidConfig(theme: Theme): Platform {
  return {
    transformGroup: `tokens-android`,
    prefix,
    transforms: [
      "ts/size/letterspacing",
      "ts/color/hexrgba",
      "ts/typography/shorthand",
      "ts/shadow/shorthand",
      "attribute/cti",
      "color/composeColor",
      "camelCaseDecimal",
    ],
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
}
