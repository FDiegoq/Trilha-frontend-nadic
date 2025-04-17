import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="bg-custom min-h-screen ">
      <Header />
      <Main/>
    </div>
  )
}

export default App
