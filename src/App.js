import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Portfolio">Portfolio</Link>
        </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
