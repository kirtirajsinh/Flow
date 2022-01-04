import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div>
           <h4>Flow</h4>
           <Link to="/signin">SignIn</Link>
        </div>
    )
}

export default Nav
