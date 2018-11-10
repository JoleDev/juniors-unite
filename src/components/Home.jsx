import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-4'>Welcome to Collaborative Blog Project!</h1>
          <p className='lead'>Here could be anything, for what else was needed to be created.
           Every person & every idea is welcome here, 
           you are not the only one coding alone in the house so let's share and make this happen!
           You can play with CSS files, page layout, add your own component that fetches some
           kind of data you can do what your imagination allows! </p><br />

           <h1 className='display-4'>Current Roadmap:</h1>
           <p className='lead'>
           Let's create a collaborative Blog! This will be a blog but for everyone. Especially for new coders.
           The latest blog item will be on top in the navigation panel. It is going to show anything related to programming,
           jobs, difficulties, new technologies, etc...
           </p><br />

           <h1 className='display-5'>Why this is important?</h1>
           <p className='lead'>
           Because it is important to share to increase knowledge. When you share an important "AHA moment",
           you help others to develop themselves as well. Sooner or later as starters many of us face similar issues.
           </p><br />

            <h1 className='display-5'>Why Stranger Things section exist?</h1>
           <p className='lead'>
            Stranger things are the section that we are going to share some interesting problems and solutions. 
            solutions will be hidden, by a button it will switched to visible so the user will take desired time to solve the problem 
            by himself/herself.
           </p><br />

          <p style={{float: 'right'}}><b> Authors: We are!</b></p>
        </Jumbotron>
      </div>
    )
  }
}

export default Home