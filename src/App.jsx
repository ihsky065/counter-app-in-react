import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Counter App In React</h1>
      <Increment/>
    </div>
  );
}

export default App;