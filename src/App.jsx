import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'
import { useState } from 'react'


function App(){
    
    const [user, setUser] = useState(
    [
      {
        username: "Jai",
        password: "123"
      },
      {
        username: "Jagan",
        password: "143"
      }
    ]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />}></Route>
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
  
      </Routes>
    </BrowserRouter>
  )
}

export default App
