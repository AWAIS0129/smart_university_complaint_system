import React from 'react'
import Home from './Components/Home/Home'
import Registration from './Components/RegistrationPage/Registration'
import {Routes, Route} from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/register" element={<Registration />}/> 
    </Routes>
  )
}

export default App