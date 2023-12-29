import "./App.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import NavBar from "./header/NavBar";

function App() {
  return (
    <div className="div_1">
      <NavBar />
      <Home/>
      < Projects/>
    </div>
  );
}
export default App;
