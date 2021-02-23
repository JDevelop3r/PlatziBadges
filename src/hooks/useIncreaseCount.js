import { useState } from "react";

export default function useIncreaseCount(max) {
  const [count, setCount] = useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}
