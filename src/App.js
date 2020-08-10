import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Home } from './views/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <Link to="/">
          <h1 className="NavLogo">Kyler Oldroyd</h1>
        </Link>
        <div className="NavButtons">
          <Link to="/gaming">
            <button>My Gaming Website!</button>
          </Link>
          <Link to="/dogs">
            <button>My Dog Website</button>
          </Link>
          <Link to="/travels">
            <button>My Travels</button>
          </Link>
          <Link to="/about-me">
            <button>About Me</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <Route exact path='/' component={Home} />
        {/* <Route path='/gaming' component={Gaming} /> */}
        {/* <Route path='/dogs' component={Dogs} /> */}
        {/* <Route path='/travels' component={Travels} /> */}
        {/* <Route path='/about-me' component={Profile} /> */}
        {/* <Route path='/recipes' component={Recipes} /> */}
        {/* <Route path='/donate' component={Donate} /> */}
      </div>
      {/* Create padding bottom on content equal to FootOfPage height  */}
      <div className="FootOfPage">
        <h1 className="FootLogo">Kyler Oldroyd</h1>
        <div className="FootButtons">
          <Link to="/recipes">
            <button>Recipes</button>
          </Link>
          <Link to="/donate">
            <button>Donate</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
