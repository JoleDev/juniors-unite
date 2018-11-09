import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5'>About</h1>
          <p className='lead'>
          When you want to commit something, it can be hard to find a project.
          This project exist for this purpose, I am not the owner of this project, we are!
          When i was thinking to create this i tried to make the structure easy for putting your single components.
          Don't afraid to get involved this project exist for us to play! <br/> since <b>WE</b> own the project you can
          add/remove content of this page as well.
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default About