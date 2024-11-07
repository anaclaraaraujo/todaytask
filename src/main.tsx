import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './page/Home';
import './styles/global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
