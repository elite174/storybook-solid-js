import { createSignal } from "solid-js";

export const Counter = (props) => {
    console.log(props);
  const [count, setCount] = createSignal(props.initialValue ?? 0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>{" "}
      <span>{count()}</span>
    </div>
  );
};
