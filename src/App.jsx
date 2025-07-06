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
  function opration(a, b, op){
    if(op=="+"){
      return a+b
    }else if(op=="-"){
      return a-b
    }else{
      return a*b
    }
  }
  const userObj = {
    name: "mustafa",
    email: "mustafa@gmail.com"
  }
  const userArray= ["name1", "name2", "name3"]
  return (
    <div>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <h1>{demo()}</h1>
      <h1>{sum(10, 40)}</h1>
      <h1>{opration(10, 20, "+")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray[1]}</h1>
    </div>
  );
}

export default App;