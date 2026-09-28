import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './contextPage/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
  </StrictMode>,
)
