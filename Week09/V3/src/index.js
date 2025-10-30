import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from './context/todos'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
