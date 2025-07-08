import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("Apple");
  return (
    <div>
      <h1>{fruit}</h1>
    </div>
  );
}

export default App;