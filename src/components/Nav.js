import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/signup">Inscription</Link>
            {" • "}
            <Link to="/signin">Connexion</Link>
            {" • "}
            <Link to="/">Appartements</Link>
        </div>
    )
}

export default Nav;