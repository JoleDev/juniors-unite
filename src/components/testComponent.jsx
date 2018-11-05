import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import '../App.css';


class TestComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5' >Example Component:</h1>
          <p className='lead'>here could be anything, check out App.js.js for what else was needed to be created.</p>
        </Jumbotron>
      </div>
    )
  }
}

export default TestComponent