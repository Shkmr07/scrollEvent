import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Counter,ScrollCheck} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <ScrollCheck />
  </StrictMode>,
)
