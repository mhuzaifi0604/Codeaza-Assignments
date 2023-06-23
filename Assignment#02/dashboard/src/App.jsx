import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <router>
        <nav className='bg-black'>
          <link className='text-purple-500' to='/about'>About</link>
        </nav>
        <h1>HI! this is app.jsx </h1>
        <switch>
          <Route exact path='/about'>
          </Route>
        </switch>
      </router>
    </>
  )
}

export default App
