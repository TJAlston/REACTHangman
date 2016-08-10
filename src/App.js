import React, { Component } from 'react'
import Word from './Word'
import './App.css'
import Board from './Board'

class App extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'REACT',
      used: [],
      matched: []
    }
  }
  onPlay = (character) => {

  this.state.used.push(character)
  for(let i = 0; i < this.state.solution.length; i++) {
    if( character === this.state.solution[i]){
      this.state.matched.push(character)
      if( this.state.matched.length === this.state.solution.length){
        alert('You Win')
      }
    }
  }
  if(this.state.used.length >= 6){
    alert('You Lose')
  }
  this.setState({
    used: this.state.used
  })
}
  render() {
    return <div className='App'>
      <h1>HANGMAN</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay}/>
    </div>
  }
}

export default App
