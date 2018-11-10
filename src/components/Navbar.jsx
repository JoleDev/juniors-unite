import React, { Component } from 'react'

import { Button, ButtonGroup, Badge } from 'reactstrap'
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='Navbar'>
          <a target="_blank"
            rel="noopener noreferrer"
            alt=''
            href="mailto:oytuntutuncu86@gmail.com">
            <img className="contacticons"
              alt="e-mail me"
              src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/email-2-icon.png" />
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=905554147155">
            <img className="contacticons"
              alt='text me'
              src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Whatsapp-Icon.png?resize=300%2C300" />
          </a>
          <a target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/oytuntutun/juniors-unite' >
            <img alt='together we are strong' id='navicon' src='/img/navicon.png' /></a>
          <ButtonGroup vertical className='inner-navbar' style={{ alignItems: 'center', }}>
            <Link to="/"><Button
              color='primary'
              block>Home
         </Button></Link>
            <Link to="/howtostart/"><Button color='primary'>How to start?</Button></Link>
            <Link to="/about/"><Button color='primary'>About</Button></Link>
            <h1><Badge color='danger' pill>Blog</Badge></h1>
            <Link to="/testComponent"><Button color='primary'>Example Blog Page</Button></Link>
            <h1><Badge color='danger' pill>Stranger Things!</Badge></h1>
            <Link to="/problem1"><Button color='primary'>Example Problem Page</Button></Link>
          </ButtonGroup>
        </nav>
      </div>
    )
  }
}

export default Navbar