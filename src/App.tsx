import React from 'react'
import './App.scss'
import AppDefault from './AppDefault'
import AppAlt from './AppAlt'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='slon-um' element={<AppDefault />} />
        <Route path='slon-um-alt' element={<AppAlt />} />
      </Routes>
      <AppDefault />
    </div>
  )
}

export default App
