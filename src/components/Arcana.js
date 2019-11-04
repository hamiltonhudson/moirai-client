import React from 'react';
import Card from './Card';
import { ARCANA_API } from '../constants/Roots';
import '../styling/App.css';

class Arcana extends React.Component {

  state = {
    arcana: {},
    cards: []
  }

  render() {
    return (
      <div className="arcana-component">
        Arcana Component
        <div>
          <Card />
        </div>
      </div>
    )
  }

}

export default Arcana;
