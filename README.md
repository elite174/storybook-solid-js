# Storybook for Solid-js example

This repo is the example of adoption storybook for solid-js.

Thanks to guys from this thread: https://github.com/solidjs/solid-docs-next/issues/35

## Instructions

### 1. Initialize storybook in your repo as [html project](https://storybook.js.org/docs/html/get-started/install):

```
npx storybook init --type html
```

### 2. Update storybook config files in `.storybook` folder as follows:

*main.js*

**With Vite**
Add `vite-plugin-solid` to storybook config. 
```
const Solid = require("vite-plugin-solid");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  
  // Add solid plugin here
  async viteFinal(config, { configType }) {
    config.plugins.unshift(Solid({ hot: false }));

    return config;
  },
};
```

*preview.js*

Customize your `preview.js` file as follows.

```
import { render } from "solid-js/web";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

let disposeStory;

export const decorators = [
  (Story) => {
    if (disposeStory) {
      disposeStory();
    }

    const root = document.getElementById("root");
    const solidRoot = document.createElement("div");

    solidRoot.setAttribute("id", "solid-root");
    root.appendChild(solidRoot);

    disposeStory = render(Story, solidRoot);

    return solidRoot;
    // return createRoot(() => Story()); // do not work correctly https://github.com/solidjs/solid/issues/553
  },
];
```

## Comments

- _.npmrc_ file is necessary because I use npm v8, however storybook doesn't support it, and that's why it requires this file.
