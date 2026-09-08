import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  <div style ={{border:'2px solid black' , height: '400px', width: '400px'}}>
  <h1 style={{ color: 'Red', fontFamily: 'Arial',fontSize: '24px', backgroundColor: 'lightgray' }}>ABES Engineering College</h1>
  <h2 style={{color: 'brown', fontSize: '18px' }}>Name : Rameshwar Tripathi</h2>
  <h2 style={{ color: 'blue', fontSize: '18px' }}>Roll No : 2400320100888</h2>
  <h2 style={{ color: 'green', fontSize: '18px' }}>Branch : CSE</h2>
  <h2 style={{ color: 'purple', fontSize: '18px' }}>Section : 24</h2>
  <h2 style={{ color: 'orange', fontSize: '18px' }}>Skills : HTML, CSS, JavaScript</h2>
   </div> 
  </>
      )
}

export default App
