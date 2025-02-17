import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Whoa</h1>
      <p>I can like... say anything here.</p>
      <MyButton/>
    </div>
  );
}

export default App;
