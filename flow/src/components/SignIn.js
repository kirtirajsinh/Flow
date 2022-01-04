import React from 'react'
import { useAuth } from './AuthContext';


const SignIn = () => {
    
let auth = useAuth();

return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <button onClick={() => auth.signin()}>Sign In with Google</button>
            
        </div>
    )
}

export default SignIn

