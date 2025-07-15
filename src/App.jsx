import { useState } from "react";
function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>Hide and Show</h1>
      <button onClick={()=> {
        setDisplay(!display)
      }}>Hide & Show</button>
      {
        display? <h1>Mustafa</h1>: null
      }

    </div>
  );
}

export default App;