import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        
        <div className='navigation'>
            <div className='logo'>
                <h1>Les Pierres De L'oise</h1>
                </div>
            <div className='navi'>
                <hr/>
            <NavLink to="/">
                Acceuil
            </NavLink>
            <NavLink to="/chantier-ext">
                Nos chantiers exterieurs
            </NavLink>
            <NavLink to="/chantier-int">
                Nos chantiers interieurs
            </NavLink>
            <NavLink to="/contact">
                Nous contacter
            </NavLink>
            <hr />
            </div>
        </div>
    );
};

export default Navigation;