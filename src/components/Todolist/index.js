import React, { Component } from "react";
import TodoItems from "../TodoItems/index";
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: "",
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    let state = this.state;
    if (this._tarefaInput.value != null) {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now(),
      };

      this.setState({ items: [...state.items, newItem] });
    }
    this.setState({ tarefa: "" });
    e.preventDefault();
  }

  deleteItem(key) {
    console.log("Item a ser deletado: " + key);
    let filtro = this.state.items.filter((item) => {
      // Retorna apenas os items que tiverem a key diferente da key que recebe por parametro na funcao
      return item.key !== key;
    });
    this.setState({ items: filtro });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            className='textArea'
            type="text"
            placeholder="Nova tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(e) => this.setState({ tarefa: e.target.value })}
            ref={(event) => (this._tarefaInput = event)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <TodoItems lista={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
