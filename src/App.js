import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestComponent from './components/testComponent';
import { Button, ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap'
import About from './components/about.jsx'
import Users from './components/reserved.jsx'
import Index from './components/index.jsx'


// TestComponent is being imported, your components will be imported as well.

const AppRouter = () => (
  <Router>
    <div>
      <nav className='Navbar'>
      <img id='navicon' src='/img/navicon.png' />
        <ButtonGroup vertical className='inner-navbar' style={{ alignItems: 'center' }}>
          <Link to="/"><Button
            color='primary'
            size='lg'
            block>Home
         </Button></Link>
          <Link to="/about/"><Button color='primary'>About</Button></Link>
          <Link to="/users/"><Button color='primary'>Reserved Link</Button></Link>
          <ButtonDropdown>
            <DropdownToggle color='danger'>
              Components
    </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Dropdown Link</DropdownItem>
              <DropdownItem>Dropdown Link</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Link to="/testComponent"><Button color='primary'>Example component</Button></Link>
        </ButtonGroup>
      </nav>

      <Route path="/testComponent" component={TestComponent} />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;