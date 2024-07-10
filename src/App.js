import React from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import MyWork from './components/myWork/MyWork'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App