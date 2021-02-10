import React, { Component } from "react";
import imgCronometro from './assets/cronometro.png'
import './style.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'GO'
    }
    this.timer = null
    this.go = this.go.bind(this)
    this.reset = this.reset.bind(this)
  }

  go(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'STOP';
    }

    this.setState(state);
  }

  reset(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'START';
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={imgCronometro} className='img'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.go}>{this.state.botao}</a>
          <a className='botao' onClick={this.reset}>RESET</a>
        </div>
      </div>
    );
  }
}

export default App;