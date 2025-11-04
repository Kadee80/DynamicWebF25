import React from 'react'
import Menu from './components/Menu'
import Route from './components/Route'

import CagePage from './pages/CagePage'
import CatsPage from './pages/CatsPage'
import WuTangPage from './pages/WuTangPage'
import ChickenPage from './pages/ChickenPage'

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Menu />
      <div className="col-span-5">
        {/* this is where we would switch paghge content */}
        <Route path="/cats">
          <CatsPage />
        </Route>
        <Route path="/chickens">
          <ChickenPage />
        </Route>
        <Route path="/cage">
          <CagePage />
        </Route>
        <Route path="/wu">
          <WuTangPage />
        </Route>
      </div>
    </div>
  )
}

export default App
