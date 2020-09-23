import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
       <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>My App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link className="link" to="/">About</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link" to="/Contact">Contact</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link" to="/Portfolio">Portfolio</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Portfolio" component={Portfolio} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
