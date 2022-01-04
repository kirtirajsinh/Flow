import React from 'react'
import {useAuth} from "../components/AuthContext"
import Nav from "../components/Nav"



const Home = () => {
    const auth = useAuth();
    return(
        <div>
            <Nav />
            {auth.currentUser ?(
                <div>
                    <h3>{auth.user.photoURL}<br />{auth.user.displayName}</h3>
                    <button onClick={() => auth.signout()}>SingOut</button>
                </div>
            ):(
                <h3>Signed Out</h3>
            )}
        </div>
    )
}



export default Home
