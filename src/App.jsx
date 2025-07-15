import { useState } from "react";
function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h1>Toggle in React</h1>
      {
        display? <h1>Mustafa</h1>: <h1>no user</h1>
      }

    </div>
  );
}

export default App;