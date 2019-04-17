import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) =>{
    return (
        <header className='Header'>
            <div className="HeaderLogo"><Link to="/" onClick={ props.cleanLoading }>StarDB</Link></div>
            <div className='HeaderLinks'>
                <Link to="/people" onClick={() => props.displayItems("PEOPLE")}>People</Link>
                <Link to="/planet" onClick={() => props.displayItems("PLANET")}>Planet</Link>   
                <Link to="/starship" onClick={() => props.displayItems("STARSHIP")}>Starships</Link>       
            </div> 
        </header>
    )
}

export default Header