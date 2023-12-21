import { Data } from "../../../public/data/data";

function Navbar (){
    return( 
        <nav className="Navbar">
            <ul className="menus">
                {Data.map((Data, index) =>{
                    return(
                        <li className="menu-items"key={index}>
                            <a href={Data.name}>{Data.name}</a>
        
                        </li>
                        
                        )
                }
                )}
            </ul>
        </nav>
    )
}
export default Navbar