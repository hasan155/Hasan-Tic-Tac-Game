import React, { Component } from 'react'
import "./App.css";
import ChoosePlayer from "./Components/ChoosePlayer";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       board: Array(9).fill(null),
       player: null,
       winner: null
    }
  }

  chackWinner = () => {
    let winLines =
     [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ]

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] &&this.state.board[a] === this.state.board[c]) {
        alert(this.state.player + ' is win!');
        this.setState({
          winner: this.state.player
        })
      }
    }
  } 

  clickHandler = (index) => {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if(this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "Hasan" ? "Mahmud" : "Hasan"
        })
        this.chackWinner()
      } else {
        alert("You can click only one!!!");
      } 
    } else {
      alert('Please select a player');
    }
  }

  setPlayer = player => {
    this.setState({
      player: player
    })
  }
  resetHandeler = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })    
  }
  render() {
    let Box = 
    this.state.board.map(
      (box, index) => {
      return (
        <div className="box" key={index} 
        onClick={() =>this.clickHandler(index)}>
        {box}
        </div>
      )
    })
    let Status = 
     this.state.player ? 
     <h2>Next player is {this.state.player} </h2> : 
     <ChoosePlayer setPlayer={this.setPlayer}/>
    return (
      <div className="container">
        <h1>World's Best Tic Tac Toe Game</h1>
        {Status}
        <div className="board">
          {Box}
        </div>
        <button disabled={!this.state.winner} onClick={this.resetHandeler} >Reset</button>
      </div>
    )
  }
}

export default App;