import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Button;
