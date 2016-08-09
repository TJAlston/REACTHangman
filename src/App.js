import React, { Component } from 'react'
import Word from './Word'
import Board from './Board'
import './App'

  class App extends Component {

    constructor () {
      super()
      this.state = {
        solution: 'COMPLETE',
        used: []
        ]
      }
    }
      onPlay = (character) => {
        this.state.used.push(character)
        this.setState({
          used: this.state.used
        })

    }
    render () {
      return <div className='App'>
        <h1>HANGMAN!</h1>
        <Word solution={this.state.solution} used={this.state.used} />
        <Board onPlay={this.onPlay} />
      </div>
    }
  }

export default App
