import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="cardName">
          Nome:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="cardName">
          Descrição:
          <textarea
            type="text"
            name="cardDescription"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Primeiro Atributo:
          <input
            type="number"
            name="card1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Segundo Atributo:
          <input
            type="number"
            name="card2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Terceiro Atributo:
          <input
            type="number"
            name="card3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="img">
          Imagem:
          <input
            type="text"
            name="img"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="supertrunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar

        </button>
      </div>
    );
  }
}

export default Form;
