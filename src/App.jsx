import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>Counter App In React</h2>
      <p>{counter}</p>
      <button onClick={Increment}>Add</button>
    </div>
  );
}

export default App;