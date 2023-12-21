import Dropdown from "./Dropdown";

function MenuItems({items}) {
    return (
        <li className="menu-items">
            {items.contacts ? (
                <> 
                < button type="button" aria-haspopup = "menu">
                    {items.title}{''}
                    </button>
                    < Dropdown submenus={items.contacts} />
                </>
            ) : (
                <a href={items.id}> {items.spec}</a>

                    
            )}
        
        </li>
    )
}

export default MenuItems