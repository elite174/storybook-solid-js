import { Counter } from "../Counter";

export const CounterDefault = () => <Counter />;

export const CounterWithProps = () => <Counter initialValue={123} />;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Counter",
  component: Counter,
};
