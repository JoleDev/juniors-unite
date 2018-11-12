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
            <h3><Link to="/"><Button
              color='primary'
              block>Home
         </Button></Link></h3>
            <h3><Link to="/howtostart/"><Button color='primary'>How to start?</Button></Link></h3>
            <h3><Link to="/about/"><Button color='primary'>About</Button></Link></h3>
            <h2><Badge color='danger' pill>Components</Badge></h2>
            <Link to="/testComponent"><Button color='primary'>Example Component </Button></Link>
            <h2><Badge color='danger' pill>Co-Blog</Badge></h2>
            <Link to="/problem1"><Button color='primary'>Example Blog Page</Button></Link>
          </ButtonGroup>
        </nav>
      </div>
    )
  }
}

export default Navbar