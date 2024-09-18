import React from 'react'
import './style.css'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Intro from './components/Intro'
import Catchy from './components/Catchy'
import ContactForm from './components/ContactForm'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <> 
      <Home/>
      <Technologies/>
      <Intro/>
      <Projects/>
      <Catchy/>
      <About/>
      <ContactForm/>
      
    </>
  )
}

export default App
