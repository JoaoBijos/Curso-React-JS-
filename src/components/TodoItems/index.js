import React, {Component} from 'react'
import './style.css'

class TodoItems extends Component{
  
  constructor(props){
    super(props)
    this.state={

    }
 
    this.delete = this.delete.bind(this)
  }
  
  delete(key){
    this.props.delete(key)
  }

  render(){
    return(
      <div className='container'>
        <ul>
          {this.props.lista.map((item)=>{
            return(
              <li className='items' onClick={() => this.delete(item.key)} key={item.ket}>{item.text}</li>
            )
          })}
        </ul>
        <h5>*Para excluir um item basta clicar nele</h5>
      </div>
    )
  }
}

export default TodoItems