import React, {Component} from 'react'
import './style.css'
import {Link} from 'react-router-dom'

class Home extends Component{
  render(){
    return(
      <div className='header'>
          <Link to='/'>Filmaria</Link>
      </div>
    )
  }
}

export default Home