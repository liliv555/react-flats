import React, { Component } from "react";

import Flat from './flat';
import flats from '../data/flats';

// eslint-disable-next-line react/prefer-stateless-function
class flatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {flats.map((flat) => {
          return (
            <Flat name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} key={flat.name} />
          );
        })}
      </div>
    );
  }
}

export default flatList;
