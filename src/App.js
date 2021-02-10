import React, { Component } from "react";
import './style.css'
import biscoito from './assets/biscoito.png';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['O Aspira só sabe aspirar, por isso, cuidado ao espirrar',
    'Thiago é um bom companheiro, ninguém pode negar, só não deixa a bebida ele pegar',
    'Pedrão é o pai de todos não tem como negar, mas se mal dele você falar, como Thiago você vai ter que lidar',
    'A Daily é o momento mais divertido do dia, melhor ainda é quando o Thiago suas piadas fazia',
    'Seu sucesso só depende de você! Pode começar a chorar !!',
    'Pedra mole água dura, tanto bate até que batata',
    'O importante é o que importa',
    'A vida é só duas, coma churrasco',
    'Sem chifre, sem defesa']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);
}
  
  render() {
    return (
      <div className='container'>
        <img src={biscoito} className='img'/>
        <Botao nome='Abrir biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className='textofrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
         <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}



export default App;