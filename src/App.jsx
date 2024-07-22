import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/header/Header'

function App() {
  return (
    <Router>
      <Header/>
    <WhatWeServe/>
     <Footer />
    </Router>
  )
}

export default App
