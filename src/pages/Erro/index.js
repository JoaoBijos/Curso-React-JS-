import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Erro extends Component{
     render(){
        return(
            <div>
                <h2>Opa ! Página não encontrada !</h2><br/>
                <h2>Você está procurando por:</h2><br/>
                <Link to='/'>Home</Link><br/>
                <Link to="/sobre">Sobre</Link>  
            </div>         
        );
    }
}

export default Erro;