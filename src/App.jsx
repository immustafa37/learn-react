function App() {
  const name = "Mustafa";
  let x = 10;
  let y = 20;
  function demo(){
    return "Function"
  }
  function sum(a, b){
    return a+b
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <h1>{demo()}</h1>
      <h1>{sum(10, 40)}</h1>
    </div>
  );
}

export default App;