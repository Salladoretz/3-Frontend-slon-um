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
          <Route path='3-Frontend-SlonUm' element={<App />} />
          <Route path='3-Frontend-SlonUm-Alt' element={<AppAlt />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
