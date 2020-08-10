import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <h1>Kyler Oldroyd</h1>
        <div className="NavButtons">
          <button>My Gaming Website!</button>
          <button>My Dog Website</button>
          <button>About Me</button>
        </div>
      </div>
      {/* Content */}
      {/* Create padding bottom on content equal to FootOfPage height  */}
      <div className="FootOfPage"></div>
    </div>
  )
}

export default App
