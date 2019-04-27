import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) =>{
    return (
        <header className='Header container'>
            <div className='row'>
                <div className="HeaderLogo 
                col-12
                col-md-4">
                    <Link to="/StarDB" onClick={ props.cleanLoading }>StarDB</Link>
                </div>
                <div className='HeaderLinks 
                col-12
                col-md-8'>
                    <Link to="/StarDB/people" onClick={() => props.displayItems("PEOPLE")}>People</Link>
                    <Link to="/StarDB/planet" onClick={() => props.displayItems("PLANET")}>Planet</Link>   
                    <Link to="/StarDB/starship" onClick={() => props.displayItems("STARSHIP")}>Starships</Link>       
                </div> 
            </div>
        </header>
    )
}

export default Header