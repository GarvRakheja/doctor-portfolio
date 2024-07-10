import React from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
    </div>
  )
}

export default App