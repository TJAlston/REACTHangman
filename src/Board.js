import React, { Component } from 'react'
import './Board.css'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
        <h1>IM THE BOARD</h1>
        <Alphabet onPlay={this.props.onPlay}/>

      </div>
    )
  }
}

class Alphabet extends Component {
  render () {
    return (
      <div>
        <AlphaLetter character="A" onPlay={this.props.onPlay}/>
        <AlphaLetter character="B" onPlay={this.props.onPlay}/>
        <AlphaLetter character="C" onPlay={this.props.onPlay}/>
        <AlphaLetter character="D" onPlay={this.props.onPlay}/>
        <AlphaLetter character="E" onPlay={this.props.onPlay}/>
        <AlphaLetter character="F" onPlay={this.props.onPlay}/>
        <AlphaLetter character="G" onPlay={this.props.onPlay}/>
        <AlphaLetter character="H" onPlay={this.props.onPlay}/>
        <AlphaLetter character="I" onPlay={this.props.onPlay}/>
        <AlphaLetter character="J" onPlay={this.props.onPlay}/>
        <AlphaLetter character="K" onPlay={this.props.onPlay}/>
        <AlphaLetter character="L" onPlay={this.props.onPlay}/>
        <AlphaLetter character="M" onPlay={this.props.onPlay}/>
        <AlphaLetter character="N" onPlay={this.props.onPlay}/>
        <AlphaLetter character="O" onPlay={this.props.onPlay}/>
        <AlphaLetter character="P" onPlay={this.props.onPlay}/>
        <AlphaLetter character="Q" onPlay={this.props.onPlay}/>
        <AlphaLetter character="R" onPlay={this.props.onPlay}/>
        <AlphaLetter character="S" onPlay={this.props.onPlay}/>
        <AlphaLetter character="T" onPlay={this.props.onPlay}/>
        <AlphaLetter character="U" onPlay={this.props.onPlay}/>
        <AlphaLetter character="V" onPlay={this.props.onPlay}/>
        <AlphaLetter character="W" onPlay={this.props.onPlay}/>
        <AlphaLetter character="X" onPlay={this.props.onPlay}/>
        <AlphaLetter character="Y" onPlay={this.props.onPlay}/>
        <AlphaLetter character="Z" onPlay={this.props.onPlay}/>
      </div>
    )
  }
}

class AlphaLetter extends Component {
  handleClick = () => {
    this.props.onPlay(this.props.character)
  }
  render () {
    return <button onClick={this.handleClick}>{this.props.character}</button>
  }
}
 export default Board
