import './App.css'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import Colorchange from './components/Colorchange'
import College from './components/College'
import ImageManipulation from './components/ImageManipulation'
import FetchProduct from './components/FetchProduct'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Registration'
import Dashboard from './components/Dashboard' 
import Home from './components/Home' 

function App() {
  return (
    <div >      
     <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<Login/>} ></Route>
         <Route path='/register' element ={<Register/>} ></Route>
         <Route path ='/dashboard' element ={<Dashboard/>} ></Route>
         <Route path ='/home' element ={<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App
