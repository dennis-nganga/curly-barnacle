import Projects from "../Projects/Projects";
import photo from "../assets/me_1.jpeg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-div">
        <img className="image" src={photo} alt="Dennis" />
      </div>
      <div className="wrapper__bio">
        <h1>Hi I'm Dennis</h1>
        <p> software engineer good at vanilla js,python </p>
      </div>
      <Projects />
    </>
  );
}

export default Home;
