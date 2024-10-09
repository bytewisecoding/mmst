# Electron
We are using Electron Forge, a full build pipeline maintained by the Electron team. Forge can handle various app packaging and distribution tasks.

We followed [Electron Forge's setup guide](https://www.electronforge.io) and ran the following command to setup the electron webpack template code:
```
npm init electron-app@latest mmst-app -- --template=webpack
```
Note that there is a bug in Powershell that causes the command to run the base instead of the specified template.

# React
We are using React to create responsive, reuseable, and flexible UI.

We followed [Electron Forge's react integration guide](https://www.electronforge.io/guides/framework-integration/react) and where we ran several commands to install babel + react and added some code to build JSX and display react code.

We then made further modifications to setup the React app:
1. Create new file `src/index.js` with the following code:
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
2. In `index.html`, replaced contents of `<body>` with `<div id="root"></div>`. This will provide the entry point for `createRoot` inside `index.js`.
3. Create `src/app.js` and add desired React code
4. In `renderer.js`, add `import "./index.js";` to load the code that will create the React root at `<div id="root"></div>` and load the React components.

# ESLint + Prettier
We are using ESLint and Prettier to statically scan for code issues and automatically format code files. This helps to catch bugs and enforce code styling for readability.

We followed [ESLint's getting started guide](https://eslint.org/docs/latest/use/getting-started) and [Prettier's install guide](https://prettier.io/docs/en/install).

We then modified `settings` and `languageOptions` inside `eslint.config.mjs`:
```
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
}
```
