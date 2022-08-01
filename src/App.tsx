import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppDefault from './AppDefault'
import AppAlt from './AppAlt'

function App() {
  return (
    <div>
      <Routes>
        <Route path='slon-um' element={<AppDefault />} />
        <Route path='slon-um' element={<AppAlt />} />
      </Routes>
    </div>
  )
}

export default App
