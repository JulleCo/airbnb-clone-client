import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/list-places">Place</Link>
            {" • "}
            <Link to="/">Home</Link>
        </div>
    )
}

export default Nav;