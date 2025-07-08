import { useState } from "react";

function App() {
  const [name, setName] = useState("Mustafa");
  const handleName = ()=> {
    setName("Mustafa Ahsan")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleName}>Change Name</button>
    </div>
  );
}

export default App;