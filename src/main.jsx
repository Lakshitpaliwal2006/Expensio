import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FinanceProvider } from './Contexts/FinanceContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FinanceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FinanceProvider>
)
