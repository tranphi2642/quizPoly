import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRouters } from '../routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Nav from '../components/Nav/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
