import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import './pages/home/styles.css'
import './styles/global.css';

// Renderização do componente APP na ReactDOM lá no root, ou seja, acessa a árvore de elementos pela dom e insere no elemento div todo o conteúdo que está dentro de APP
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

