import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5'>About</h1>
          <p className='lead'>here could be anything, check out index.js for what else was needed to be created.</p>
        </Jumbotron>
      </div>
    )
  }
}

export default About