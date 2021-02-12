import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div>
         Header - Meu Projeto<br/>
         <Link to='/sobre'>Ir para sobre</Link>
         <hr/>
      </div>
    );
  }
}

export default Header;