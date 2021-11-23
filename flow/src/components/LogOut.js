import React from 'react'
import { useAuth } from './AuthContext';
import {useNavigate} from "react-router-dom"

const LogOut = () => {

    let auth = useAuth();
    let navigate = useNavigate();
    
    const handleLogOut = () => {
        auth.signOut(() => navigate("/"));
    }
    return (
        <div>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default LogOut
