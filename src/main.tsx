import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Task } from './page/Task';
import './styles/global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Task />
  </StrictMode>,
)
