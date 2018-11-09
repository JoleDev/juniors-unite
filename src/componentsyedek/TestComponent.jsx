import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import '../App.css';


class TestComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5' >Example Component:</h1>
          <p className='lead'>here could be anything, check out App.js for what is needed to create your component.</p>
        </Jumbotron>
      </div>
    )
  }
}

export default TestComponent