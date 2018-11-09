import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestComponent from './components/TestComponent.jsx';
import About from './components/About.jsx'
import HowToStart from './components/HowToStart.jsx'
import Home from './components/Home.jsx';
import Navbar from './components/Navbar';


// TestComponent is being imported, your components will be imported as well.

const AppRouter = () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/testComponent" component={TestComponent} />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/howtostart/" component={HowToStart} />
    </div>
  </Router>
);

export default AppRouter;