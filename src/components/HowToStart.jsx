import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Reserved extends Component {
  render() {
    return (
      <Jumbotron className='example' color='primary' style={{ paddingLeft: 270 }}>
        <h1 className='display-5'>Do you want to join ?</h1>
        <p className='lead' style={{ maxWidth: 900 }}>
          First we need to set your local environment.
        <a target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/oytuntutun/juniors-unite' > <b>Here you can go to the repo.</b></a> instructions are also in gitHub.
        <br />1- Fork this repository. <br />
          2- Clone the repository.<br />
          3- Go to development branch. <br />
          4- Go to project folder in your terminal then type <b>yarn</b> to install all required packages.<br />
          5- <b>yarn start</b> to start to project locally and watch file changes. <br />
          6- Make desired changes in another branch.<br />
          7- Make a pull request.<br /><br />
          This project has; React, React-Router and Bootstrap. What we want to do is create a new Blog link under the Blog!
          Then show a page that what was the interesting thing that you learn today, yesterday, this week, this year.
        </p>
      </Jumbotron>
    )
  }
}

export default Reserved