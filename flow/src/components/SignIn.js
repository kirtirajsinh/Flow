import React, {useEffect} from 'react'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    let navigate = useNavigate();
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

