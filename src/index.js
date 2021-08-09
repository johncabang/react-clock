import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ClockProvider } from './context/ClockContext'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ClockProvider>
      <App />
    </ClockProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
