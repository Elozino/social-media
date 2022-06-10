import { useState } from 'react'
import "./App.css"
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
function App() {

  return (
    <div className="App">
      <div className="blur blur-left"></div>
      <div className="blur blur-right"></div>
      {/* <Home /> */}
      <Profile/>
      {/* <Auth /> */}
    </div>
  )
}

export default App
