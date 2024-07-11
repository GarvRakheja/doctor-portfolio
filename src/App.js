import React from 'react'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App