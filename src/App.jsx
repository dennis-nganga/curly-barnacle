import "./App.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import NavBar from "./Navbar/NavBar";
import Footer from "./Projects/Footer/Footer";

function App() {
  return (
    <div className="div_1">
      <NavBar />
      <div className="main__app">
        <Home />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
