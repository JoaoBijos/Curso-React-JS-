import React, { Component } from "react";

// as props são propiedades estáticas
// já as states são propiedades que conseguimos alterar os valores
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Matheus",
      contador: 0,
    };

    // damos o bind para a função poder ser acessada com maior facilidade
    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  // para alterar o state usamo o this.setState()
  aumentar(){
    let state = this.state
    state.contador += 1
    state.nome = 'Jorge'
    this.setState(state)
  }

  diminuir(){
    let state = this.state
    if(state.contador === 0){
      alert('Opa! De 0 não passa!')
      return
    }
    state.contador -= 1
    state.nome = 'Pedro'
    this.setState(state)
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.nome}</h2>
        <h3>
          <button onClick={this.diminuir}> - </button>
          {this.state.contador}
          <button onClick={this.aumentar}> + </button>
        </h3>
      </div>
    ); 
  }
}

export default App;
