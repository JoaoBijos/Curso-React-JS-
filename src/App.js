import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: ''
    };

  }

  render() {
    return (
      <div>
        <h2>Cadastro</h2>
        Email :
        <input type='email' name='email' value={this.state.email}
               onChange={(e) => this.setState({email: e.target.value})}/><br/>
        Senha :
        <input type='password' name='senha' value={this.state.senha}
               onChange={(e) => this.setState({senha: e.target.value})}/><br/>
        Sexo:
        <select name='sexo' value={this.state.sexo} onChange={(e) => this.setState({sexo: e.target.value})}>
          <option value='masculino'>Maculino</option>
          <option value='feminino'>Feminino</option>
        </select>

        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;