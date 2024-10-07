import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: false, // Webpack Magic Variable
        MAIN_WINDOW_WEBPACK_ENTRY: false, // Webpack Magic Variable
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
