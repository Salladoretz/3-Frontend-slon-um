import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppDefault from './AppDefault'
import AppAlt from './AppAlt'

function App() {
  return (
    <div>
      <Routes>
        <Route path='3-Frontend-slonUm' element={<AppDefault />} />
        <Route path='slon-um-alt' element={<AppAlt />} />
      </Routes>
    </div>
  )
}

export default App
