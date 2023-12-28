import './NavBar.css'

function NavBar() {
  return (
    <div className="nav-bar-div">
      <p>
        <a href="/Home"> Home </a>
      </p>
      <p>
        <a href="/projects">Projects</a>
      </p>
      <p>
        <a href="/Contact">Contact</a>
      </p>
      <p> <a href="/faq">FAQ</a></p>
    </div>
  );
}

export default NavBar;
