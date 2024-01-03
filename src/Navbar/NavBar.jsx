import "./NavBar.css";
import Projects from "../Projects/Projects";

function NavBar() {
  function handleClick(event){
    console.log(Projects)
  }
  return (
    <div className="nav-bar-div">
      <p>
        <a href="/"> Home </a>
      </p>
      <p>
        <a onClick={handleClick} href={Projects}> projects</a>
      </p>
      <p>
        <a href="/Contact">Contact</a>
      </p>
      <p>
        {" "}
        <a href="/faq">FAQ</a>
      </p>
    </div>
  );
}

export default NavBar;
