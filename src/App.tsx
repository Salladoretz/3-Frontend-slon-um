import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppDefault from './AppDefault'
import AppAlt from './AppAlt'


function App() {

  const routes = useRoutes([
    {
      path: '/',
      element: <AppDefault />
    },
    {
      path: '3-Frontend-slonUm-alt',
      element: <AppAlt />
    }
  ])
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
