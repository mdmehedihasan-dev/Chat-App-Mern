import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import SingUp from './pages/singup/SingUp'
import Login from './pages/login/Login'


function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>} />
         <Route path='/singup' element={<SingUp/>} />
     </Routes>
     
    
  
 
     
    </div>
  )
}

export default App
