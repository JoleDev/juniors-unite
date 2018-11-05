import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Reserved extends Component {
  render() {
    return (
      <Jumbotron className='example' color='primary' style={{ paddingLeft: 270}}>
        <h1 className='display-5'>Do you want to join ?</h1>
        <p className='lead' style={{ maxWidth: 900 }}>
        First we need to set your local environment.
        <a target='_blank' href='https://github.com/oytuntutun/juniors-unite' > here you can go to the repo.</a> instructions are also in gitHub.
        <br />1- Fork this repository. <br />
2- Clone the repository.<br />
3- Go to project folder in your terminal then type <b>-yarn</b> to install all required packages.<br />
4- <b>yarn start</b> to start to project locally and watch file changes. <br />
5- Make desired changes in another branch.<br />
6- Make a pull request.<br /><br />
This project has; React, React-Router and Bootstrap. What we want to do is basicly anything! But i was thinking maybe you create a component in the components folder, then create it's link in the navbar.
        </p>
      </Jumbotron>
    )
  }
}

export default Reserved