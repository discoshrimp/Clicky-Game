import React, { Component } from 'react';
import './App.css';
import tiles from './components/icons.json'
import TopBar from './components/TopBar'
import Wrapper from './components/Wrapper'
import Tile from './components/Tile'



class App extends Component {

  initialState = () => {
    return {
      tiles: tiles,
      clicked: [],
      score: 0,
    }
  }

  // shuffle=()=>{
  //   let randomNumber = Math.floor(Math.random()  * 17)
  //   return randomNumber
  // }

  state = {
    tiles: tiles,
    clicked: [],
    score: 0
  }
  handleTileClick = (character) => {
    this.setState({ clicked: [...this.state.clicked, character], score: this.state.score + 1 })

    for (var i = 0; i < this.state.clicked.length; i++) {
      if (character === this.state.clicked[i]) {
        this.setState(this.initialState())
      }
      if(this.state.score ===16){
        alert('Yay, you won!')
        this.setState(this.initialState())
      }

    }
  }

  render() {
    console.log(this.state.clicked, this.state.score)
    return (
      <Wrapper>
        <TopBar>{this.state.score}</TopBar>
        {this.state.tiles.map(tile => (
          <Tile handleTileClick={this.handleTileClick} name={tile.name} image={tile.image} id={tile.id} key={tile.id} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
