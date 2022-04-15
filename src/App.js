import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const valor = (target.type === 'checkbox' ? checked : target.value);
    this.setState({ [target.name]: valor });

    const min = 90;
    const max = 210;
    const sum = Number(cardAttr1.value)
     + Number(cardAttr2.value)
     + Number(cardAttr3.value);

    console.log(cardAttr1.value, cardAttr2.value, cardAttr3.value);

    const regras = [
      cardName !== '',
      cardDescription !== '',
      cardImage !== '',
      cardRare !== '',
      cardAttr1.value <= min,
      cardAttr2.value <= min,
      cardAttr3.value <= min,
      cardAttr1.value >= 0,
      cardAttr2.value >= 0,
      cardAttr3.value >= 0,
      sum <= max,
    ];

    const isDisabled = regras.every((regra) => regra === true);
    this.setState({
      isSaveButtonDisabled: !isDisabled,
    });
  }

  onSaveButtonClick() {

  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
