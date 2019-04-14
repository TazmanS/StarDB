import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) =>{
    return (
        <header className='Header'>
            <div className="HeaderLogo"><Link to="/" onClick={ props.cleanState }>StarDB</Link></div>
            <div className='HeaderLinks'>
                <Link to="/people" onClick={() => props.displayAllItems("PEOPLE")}>People</Link>
                <Link to="/planet" onClick={() => props.displayAllItems("PLANET")}>Planet</Link>   
                <Link to="/starship" onClick={() => props.displayAllItems("STARSHIP")}>Starships</Link>       
            </div> 
        </header>
    )
}

export default Header