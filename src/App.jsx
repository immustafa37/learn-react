import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("Mustafa");
  const handleName = ()=> {
    setName("Mustafa Ahsan")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleName}>Change Name</button>
      <Counter />
    </div>
  );
}

export default App;