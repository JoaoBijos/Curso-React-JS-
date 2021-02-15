import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Home extends Component {

  constructor(props){
    super(props)
    this.state ={
      filmes: []
    }

    this.loadFilmes = this.loadFilmes.bind(this)
  }

  componentDidMount(){
    this.loadFilmes()
  }

  loadFilmes(){
    // URL da API: https://sujeitoprogramador.com/r-api/?api=filmes
    let url = ' https://sujeitoprogramador.com/r-api/?api=filmes'
    fetch(url)

    // se a API carregar os dados seram armazenados em json e passados para a state
    .then((r) => r.json())
    .then((json) => {
      this.setState({filmes:json})
    })
  }

  render(){
    return(
        <div className="container">
            
            <div className="lista-filmes">
                { this.state.filmes.map((filme) => {
                    return(
                        <article key={filme.id} className="filme">
                            <strong> {filme.nome} </strong>
                            <img src={filme.foto} alt="Capa" />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                }) }
            </div>

        </div>
    );
}
}

export default Home