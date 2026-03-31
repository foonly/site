import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";

export default {
  map: {
    inline: false,
  },
  plugins: [
    postcssImport,
    postcssPresetEnv({ stage: 2, features: { "nesting-rules": false } }),
  ],
};
