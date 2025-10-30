import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// import our context we just created to wrap the app
import {Provider} from './context/counter'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Whatever we pass into this value prop is "broadcast"
    directly to any component that is wrapped by the provider */}
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
