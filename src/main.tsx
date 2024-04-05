import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import './i18n';
import { ModalProvider } from './components/ModalLanguageList/ModalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
)
