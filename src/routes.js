import Rreact from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/index";
import Sobre from "./pages/sobre/index";
import Header from "./Component/Header/index"
import Erro from "./pages/Erro/index"
import Produto from "./pages/Produto/index"

// switch permite que somente uma rota seja carregada por vez
// para o id não ser fixo colocamos :id
const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route path='/produto/:id' component={Produto}/>
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
