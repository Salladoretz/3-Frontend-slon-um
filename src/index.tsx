import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import AppAlt from './AppAlt'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='slon-um' element={<App />} />
          <Route path='slon-um-alt' element={<AppAlt />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
