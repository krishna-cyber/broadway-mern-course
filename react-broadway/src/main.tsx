import React, { ReactElement, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

import LandingPage from './pages/landing/landing.page'
import { Heading3 } from './components/title/title.component'
import RouterConfig from './config/router.config'

ReactDOM.createRoot(document.getElementById('root')!).render(
<StrictMode>
  <RouterConfig/>
</StrictMode>
   
  
)