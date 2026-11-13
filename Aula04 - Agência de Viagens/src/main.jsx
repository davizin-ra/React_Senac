import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Aqui o React pega a div #root do index.html e coloca o site dentro dela.
createRoot(document.getElementById('root')).render(
  // O StrictMode ajuda a apontar alguns problemas durante o desenvolvimento.
  <StrictMode>
    <App />
  </StrictMode>,
)
