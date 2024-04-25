import { useState } from 'react'

import './App.css'
import Header from './Header'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <Home />

    </>
  )
}

export default App
