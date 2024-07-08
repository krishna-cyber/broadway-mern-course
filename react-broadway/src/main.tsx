import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

import LandingPage from './pages/landing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <LandingPage/>
  </React.StrictMode>
)