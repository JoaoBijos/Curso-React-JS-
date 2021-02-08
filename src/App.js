import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
    };

    this.cadastrar = this.cadastrar.bind(this)
  }

  cadastrar(event){
    const {nome,email,senha} = this.state

    if(nome != '' && email != '' && senha != ''){
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
    } else{
      alert('Preencha todos os campos antes de cadastrar')
    }

    // pegamos o evento que chamamos esta função para que a página não atualize
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        <form onSubmit={this.cadastrar}>
          <label>Nome :</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br/>
          <label>Email :</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br/>
          <label>Senha :</label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <br/>
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
