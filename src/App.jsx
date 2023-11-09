import "./App.css";
import Column from "./components/Column";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Progress Tracker</h1>
        <img src={logo} alt="logo" />
      </div>

      <div className="content">
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />
      </div>

      <h3 className="footer">The Man From Nepal - Akash Phago</h3>
    </div>
  );
}

export default App;
