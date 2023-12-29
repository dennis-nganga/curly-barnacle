import photo from "../assets/me_1.jpeg";
import './Home.css'

function Home (){
    return(
<div className="home-div">
    <img className="image" src ={photo} alt= "Dennis" />
    <h1>Dennis Nganga</h1>
    <p> software engineer good at vanilla js,python   </p>
</div>
    );
}

export default Home