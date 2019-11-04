import React, { Component } from 'react';
import Arcana from './Arcana';
import '../styling/App.css';
import { DECKS_API } from '../constants/Roots';

// const decksAPI = 'http://localhost:3000/api/v1/decks/'

class Deck extends Component {

  state = {
    decks: [],
    currentDeck: {},
    shuffled: '',
    arcanas: []
  }

  componentDidMount() {
    this.fetchDecks();
  }

  fetchDecks = () => {
    fetch(DECKS_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log("data", data)
      let decks = data
      console.log(this.state.decks);
      let deckOne = decks.find(deck => deck.id === 1)
      console.log(deckOne);
      this.setState({
        decks: decks,
        currentDeck: deckOne,
        shuffled: deckOne.shuffled
      })
      console.log(this.state.currentDeck.count)
    })
  }

  render() {
    console.log("this.state.currentDeck in render", this.state.currentDeck.shuffled)
    return (
      <div className="deck-component">
        <h3>DECK # {this.state.currentDeck.id}</h3>
        <p>Count: {this.state.currentDeck.count}</p>
        <p>Shuffled? {this.state.currentDeck.shuffled === false ? "No" : "Yes"}</p>
        <br/>
        <div> <Arcana /> </div>
      </div>
    )
  }

}

export default Deck;
