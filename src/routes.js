import Rreact from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Sobre from "./pages/sobre/index";
import Header from "./Component/Header/index"


// switch permite que somente uma rota seja carregada por vez
const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
