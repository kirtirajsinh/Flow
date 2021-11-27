import React, { useState, useEffect, useContext } from 'react'
import {signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth, provider , db} from "../firebase"
import {useNavigate} from 'react-router-dom'
import { collection, setDoc , getDocs, Timestamp  } from "firebase/firestore";


const AuthContext = React.createContext();

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
      // const currentUser = auth.currentUser
      
      const signin = () => {
          return signInWithPopup(auth, provider)
          .then( async (userDetails) =>{
                  console.log(userDetails)
                  const user = userDetails.user;
                    setUser(user);
                    const querySnapshot = await getDocs(collection(db, "users"));
                    console.log(querySnapshot)
                    querySnapshot.forEach((doc) => {
                        if(doc.data().uid !== user.uid){
                          console.log(doc.data().uid)
                            setDoc(collection(db, "users", user.uid), {
                                name: user.displayName,
                                photo: user.photoURL,
                                createdAt: Timestamp.fromDate(new Date())
                            })
                        }
                    })
                    navigate("/home", { replace: true });
                    });
                    
                 
          
        
      }

      const signout = () => {
          return signOut(auth).then(() => {
            // Sign-out successful.
            setUser(false);
           
          }).catch((error) => {
            // An error happened.
            console.error(error);
          });
      }

      useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              
              setUser(null);
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

