function App() {
  const name = "Mustafa";
  let x = 10;
  let y = 20;
  function demo(){
    return "Function"
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <h1>{demo()}</h1>
    </div>
  );
}

export default App;