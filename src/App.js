import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestComponent from './components/testComponent';
import { Button, ButtonGroup, Badge } from 'reactstrap'
import About from './components/about.jsx'
import howToStart from './components/howToStart.jsx'
import Home from './components/home.jsx';


// TestComponent is being imported, your components will be imported as well.

const AppRouter = () => (
  <Router>
    <div>
      <nav className='Navbar'>
      <a target="_blank" 
      alt=''
      href="mailto:oytuntutuncu86@gmail.com">
      <img className="contacticons"
      alt="e-mail me"
      src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/email-2-icon.png" />
      </a>
      <a target="_blank" 
      href="https://api.whatsapp.com/send?phone=905554147155">
      <img className="contacticons" 
      alt='text me'
      src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Whatsapp-Icon.png?resize=300%2C300" />
      </a> 
      <a target='_blank' 
      href='https://github.com/oytuntutun/juniors-unite' >
      <img alt='together we are strong'  id='navicon' src='/img/navicon.png' /></a>
        <ButtonGroup vertical className='inner-navbar' style={{ alignItems: 'center', }}>
          <Link to="/"><Button
            color='primary'
            block>Home
         </Button></Link>
          <Link to="/about/"><Button color='primary'>About</Button></Link>
          <Link to="/howtostart/"><Button color='primary'>How to start?</Button></Link>
          <h1><Badge color='danger' pill>Components</Badge></h1>
          <Link to="/testComponent"><Button color='primary'>Example component</Button></Link>
        </ButtonGroup>
      </nav>

      <Route path="/testComponent" component={TestComponent} />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/howtostart/" component={howToStart} />
    </div>
  </Router>
);

export default AppRouter;