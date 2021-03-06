import React, { Component } from "react";

class Flat extends Component {
  render() {
    return (
      <div className="card" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
            <><div className="card-category">
              <p>
                {this.props.price}
                {' '}
                {this.props.priceCurrency}
              </p>
            </div>
            <div className="card-description">
              <h2>
                {this.props.name}
              </h2>
            </div>
            <a className="card-link" href="#" /></>
      </div>
    );
  }
}

export default Flat;
