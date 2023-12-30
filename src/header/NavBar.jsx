import './NavBar.css'
import Projects from '../Projects/Projects';

function NavBar() {
  const [ toggleMenu,setToggleMEnu]= react.useState(false)
  return (
    <div className="nav-bar-div">
      <p>
        <a href="/Home"> Home </a>
      </p>
      <p>
        <a href="Projects">Projects</a>
      </p>
      <p>
        <a href="/Contact">Contact</a>
      </p>
      <p> <a href="/faq">FAQ</a></p>
    </div>
  );
}

export default NavBar;
