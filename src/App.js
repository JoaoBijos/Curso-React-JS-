// sempre que quiser utilizar o React, devemos importar ele para o arquivo
import React,{ Component } from "react";

// criando um componente que é tambem uma class que provem de Component 
// render() é o que faz a tela ser renderizada e o return é o que retorna para a tela o que será renderizado 
// class já tem acesso ao props não precisando assim passar os parametros
// para acessar props deve-se escrever {this.props + o nome da tag}
class Equipe extends Component{
    render(){
      return(
        <div>
         <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
         <hr/>
        </div>
      )
    }
}

class Sobre extends Component{
  render(){
    return(
      <div>
          <h2>Nome: {this.props.nome}</h2>
          <h3>Cargo: {this.props.cargo}</h3>
          <h3>Idade: {this.props.idade} anos</h3>
        </div>
    )
  }
}

// aqui é chamado o componente Bemvindo, e também é passado para ele parametros
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome='Matheus' cargo='Progamador' idade='24'/>
      <Equipe nome='Lucas' cargo='Analista' idade='30 '/>
    </div>
  );
}

// usando o export poderemos utilizar as funcionalidades do arquivo em outros arquivos quantas vezes for necessário
export default App;
