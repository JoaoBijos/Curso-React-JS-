import React, { Component } from "react";
import Feed from "./components/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: "Matheus", curtidas: 10, comentarios: 2},
        {id: 2, username: "Lucas", curtidas: 102, comentarios: 20},
        {id: 3, username: "Amanda", curtidas: 40, comentarios: 13},
        {id: 3, username: "Ricardo", curtidas: 1, comentarios: 0},
      ],
    };
  }

  // o map percorre todo o vetor item por item
  // é necessário que seja passado uma key para cada user, no caso usamos o ID
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default App;