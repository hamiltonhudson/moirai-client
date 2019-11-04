import React, { Component } from 'react';


class Card extends Component {

  state = {
    cards: []
  }

  render() {
    return (
      <div className="card-component">
        <p>Card Component</p>
      </div>
    )
  }
}

export default Card;
