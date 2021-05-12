import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "Helio Gonzales Rivas";
  let auth = true;
  let estaciones = ["verano", "primavera", "otoño", "invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Starting React</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
