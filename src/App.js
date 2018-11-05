import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestComponent from './components/testComponent';
import { Button, ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap'


const Index = () => <div><h2>Home</h2></div>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
// TestComponent is being imported, your components will be imported as well.

const AppRouter = () => (
  <Router>
    <div>
      <nav className='Navbar'>
        <ButtonGroup vertical>
        <Link to="/"><Button color='primary'>Home</Button></Link>
          <Link to="/about/"><Button>About</Button></Link>
          <Link to="/testComponent"><Button>test</Button></Link>
          <Link to="/users/"><Button>Users</Button></Link>
          <ButtonDropdown>
            <DropdownToggle caret>
              Dropdown
    </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Dropdown Link</DropdownItem>
              <DropdownItem>Dropdown Link</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
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