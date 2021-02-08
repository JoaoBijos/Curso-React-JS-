import React, {Component} from 'react'

class Membro extends Component{

  constructor(props){
    super(props)
    this.state = { 
      nome: props.nome
    }
    this.userChange = this.userChange.bind(this)
    this.logout = this.logout.bind(this)
  }

  userChange(nome){
    this.setState({nome:nome})
  }

  logout(){
    this.setState({nome: ''})
  }

  render(){
    return(
      <div>
        <h2>Bem Vindo(a) {this.state.nome} !</h2>
        <button onClick={() => this.userChange('Lucas')}>
          Entrar no sistema
        </button>
        <button onClick={this.logout}>
          Sair
        </button>
      </div>
    )
  }
}

export default Membro