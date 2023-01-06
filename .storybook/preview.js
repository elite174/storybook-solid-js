/* @refresh reload */
/**
 * Don't forget the line above for HMR!
 * 
 * Note: for some reason HMR breaks if you change .stories file,
 * however reloading the page fixes this issue
 */ 

import { render } from "solid-js/web";

let disposeStory;

export const decorators = [
  (Story) => {
    disposeStory?.();

    const solidRoot = document.createElement("div");

    disposeStory = render(Story, solidRoot);

    return solidRoot;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
