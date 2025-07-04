import pic from './assets/pic.jpg';

function App() {
  return (
    <div>
      <h1>Mustafa</h1>
      <img src={pic} alt="Pic" />
      <ul>
        <li>pic1</li>
        <li>pic2</li>
      </ul>
      <button onClick={() => {
        alert("called")
      }}>click</button>
    </div>
  );
}

export default App;