import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FinanceProvider } from './Contexts/FinanceContext.jsx'
import App from './App.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <FinanceProvider>
    <BrowserRouter>
      < Toaster position='top-center' expand visibleToasts={1} duration={2000} richColors offset={'1vh'} theme='light' toastOptions={{ style: { background: 'lightgreen' } }} />
      < Toaster position='top-center' expand visibleToasts={1} duration={2000} richColors offset={'1vh'} theme='light' toastOptions={{ style: { background: 'black' } }} />
      < Toaster position='top-center' expand visibleToasts={1} duration={2000} richColors offset={'1vh'} theme='light' toastOptions={{ style: { background: 'black' } }} />
      <App />
    </BrowserRouter>
  </FinanceProvider>
)
