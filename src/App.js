// sempre que quiser utilizar o React, devemos importar ele para o arquivo
import React from "react";

// aqui um componente foi criado, e também ele recebe os parametros que foram passados para ele através do props
const Bemvindo = (props) => {
  // para a função retornar algo colocamos o return, e caso for preciso retornar mais de uma tag, deve-seabrir ()
  return (
    <div>
      <h2>
        Eu sou {props.nome} e tenho {props.idade} anos.
      </h2>
    </div>
  );
};

// aqui é chamado o componente Bemvindo, e também é passado para ele parametros
function App() {
  return (
    <div>
      <Bemvindo nome="João" idade="18" />
      <Bemvindo nome="Maria" idade="20" />
    </div>
  );
}

// usando o export poderemos utilizar as funcionalidades do arquivo em outros arquivos quantas vezes for necessário
export default App;
