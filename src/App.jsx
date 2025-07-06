function App() {
  const demo = ()=>{
    alert("Function Called")
  }
  return (
    <div>
      <button onClick={demo}>Click</button>
    </div>
  );
}

export default App;