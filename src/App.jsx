import React from 'react'
import './App.css'
import Images from './components/Images.jsx';
import ContactUs from './components/ContactUs';
import Navigation from './components/Navigation.jsx';
function App() {
  return (
    <>
      <Navigation/>
      <Images/>
      <ContactUs />
    </>
  )
}

export default App