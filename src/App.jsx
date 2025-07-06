function App() {
  const demo = function demo(){
        alert("Function called")
      }
  return (
    <div>
      <button onClick={demo}>Click</button>
    </div>
  );
}

export default App;