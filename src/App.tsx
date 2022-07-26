import React from 'react'
import './App.scss'
import Main from './features/main/Main'
import Benefits from './features/benefits/Benefits'
import Plan from './features/plan/Plan'
import Sertificate from './features/sertificate/Sertificate'
import PriceAndOrder from './features/priceAndOrder/PriceAndOrder'

function App() {
  return (
    <div className="App">
      <Main />
      <Benefits />
      <Plan />
      <Sertificate />
      <PriceAndOrder />
    </div>
  )
}

export default App
