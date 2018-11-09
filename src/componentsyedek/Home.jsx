import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5'>Home</h1>
          <p className='lead'>Here could be anything, for what else was needed to be created.
           Every person & every idea is welcome here, 
           you are not the only one coding alone in the house so let's share and make this happen!
           You can play with CSS files, page layout, add your own component that fetches some
           kind of data you can do what your imagination allows! </p><br />
          <p style={{float: 'right'}}><b> Authors: We are!</b></p>
        </Jumbotron>
      </div>
    )
  }
}

export default Home