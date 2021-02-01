// sempre que quiser utilizar o React, devemos importar ele para o arquivo
import React from "react";


 // esse componente recebe os parametros passados por App() 
 // e chama outro passando também os mesmos parametros para ele
 const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social facebook={props.facebook} linkedin={props.linkedin} youtube={props.youtube}/>
      <hr/>
    </div>
  );
};


// recebe os parametros de Equipe() e executa os comandos com eles 
const Sobre = (props) => {
  return (
    <div>
      <h2>Nome: {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  );
};

const Social = props => {
  return(
    <div>
      <a href={props.facebook}> Facebook </a>
      <a href={props.linkedin}> LinkedIn </a>
      <a href={props.youtube}> YouTube </a>
    </div>
  )
}

// aqui é chamado o componente Bemvindo, e também é passado para ele parametros
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="João" cargo="Progamador" idade="29" facebook="https://pt-br.facebook.com/" linkedin="https://br.linkedin.com/" youtube="https://www.youtube.com/?gl=BR&tab=r1"/>
      <Equipe nome="Maria" cargo="Analista" idade="32" facebook="https://pt-br.facebook.com/" linkedin="https://br.linkedin.com/" youtube="https://www.youtube.com/?gl=BR&tab=r1"/>
      <Equipe nome="Felipe" cargo="Designer" idade="18" facebook="https://pt-br.facebook.com/" linkedin="https://br.linkedin.com/" youtube="https://www.youtube.com/?gl=BR&tab=r1"/>
    </div>
  );
}

// usando o export poderemos utilizar as funcionalidades do arquivo em outros arquivos quantas vezes for necessário
export default App;
