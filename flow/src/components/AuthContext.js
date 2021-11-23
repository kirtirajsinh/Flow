import React, { useState, useEffect, useContext } from 'react'
import {signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth, provider} from "../firebase"
import {useNavigate,useLocation, Navigate} from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const authenticate = useProvideAuth();
    return <AuthContext.Provider value={authenticate}>{children}</AuthContext.Provider>

}

export const useAuth = () => {
    return useContext(AuthContext);
  };

  const useProvideAuth = () => {
      let navigate = useNavigate();
      const [user,setUser] = useState(null);
      
      const signin = () => {
          return signInWithPopup(auth, provider)
          .then((userDetails) =>{
                  console.log(userDetails)
                  const user = userDetails.user;
                    setUser(user);
                  navigate("/home", { replace: true });
          }).catch(error => console.error(error))
      }

      const signout = () => {
          return signOut(auth).then(() => {
            // Sign-out successful.
            setUser(false);
           
          }).catch((error) => {
            // An error happened.
          });
      }

      useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
          
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          return () => unsubscribe();
      },[]);

      return {
        user,
        signin,
        signout
      };
  }

