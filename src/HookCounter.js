import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  // handle button click event
  const handleClick = () => {
    setCounter(counter + 1);
  }

  return <div>
    <b>Counter - Hook Component</b><br /><br />
    <label>Counter: {counter}</label><br /><br />
    <button onClick={handleClick}>Add +1</button>
  </div>
}

export default HookCounter;