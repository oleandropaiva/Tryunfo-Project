import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h2 data-testid="description-card">{ cardDescription }</h2>
        <h2 data-testid="attr1-card">{ cardAttr1 }</h2>
        <h2 data-testid="attr2-card">{ cardAttr2 }</h2>
        <h2 data-testid="attr3-card">{ cardAttr3 }</h2>
        <h2 data-testid="rare-card">{ cardRare }</h2>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
