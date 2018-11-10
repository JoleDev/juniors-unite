import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import '../styles/Problem.css'



class ExampleProblem extends Component {
  state = {
    isHidden: 'hidden',
  }

  toggleHidden() {
    const {isHidden} = this.state 
    if(isHidden === 'visible'){
    this.setState({ isHidden: 'hidden' })
  } else { this.setState({isHidden: 'visible'})}
}

  render() {
    console.log(this.state)
    return (
      <div>
        <Jumbotron className='example' color='primary'>
          <h1 className='display-5' >Problem: Check if the parentheses are balanced!</h1>
          <p className='lead'>
            if the given parantheses are balanced return <b>true</b>, else <b>false</b>.<br /> Examples:
          <br /> (((()))) => true <br />
            ((()()())) => true <br />
            )() => false
          (((())) => false (missing one parentheses) <br />
            )( => false (wrong direction) <br /><br />
            <b>Problem:</b> there must be an (or more) approach to parentheses that checks if they are valid or not.
            Try to find that logic.
          </p>
          <Button className='solutionButton' onClick={this.toggleHidden.bind(this)} color='danger'>Show me the solution!</Button>
          <p className='lead' style={{ visibility: this.state.isHidden }}>
            <b>Solution:</b> <br />
            Consider each open paranthese "(" for +1 and each close paranthese ")" for -1. If the number goes below 0 it is immediately false.
            Also when the calculation complete our number must be 0 otherwise false again. <br />
            So approaching to parantheses one by one add the numbers, substract the numbers result must be 0, while making the calculation if you reach
            negative number it returns false immediately.
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default ExampleProblem