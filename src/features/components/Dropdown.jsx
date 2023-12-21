const Dropdown = ({ submenus}) => {
    return(
        <ul className="dropdown">
            {submenus.map((submenu, index)=>(
                <li className="menu-items">
                    <a href= {submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown