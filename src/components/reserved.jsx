import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Reserved extends Component {
  render() {
    return (
      <Jumbotron className='example' color='primary'>
        <h1 className='display-5'>This spot is reserved.</h1>
        <p className='lead'>here could be anything, check out index.js for what else was needed to be created.</p>
      </Jumbotron>
    )
  }
}

export default Reserved