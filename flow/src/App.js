import LandingPage from './pages/LandingPage'
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import Home from './pages/Home'
import {AuthProvider} from "./components/AuthContext"

function App() {
 return(
   <AuthProvider>
      <div>
     <Routes>
          <Route  path="/" element={<LandingPage />} />
          <Route  path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />}/>
     </Routes>
   </div>
   </AuthProvider>
   
 )
}

export default App;
