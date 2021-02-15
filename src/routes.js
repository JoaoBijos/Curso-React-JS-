import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import  Header from './components/header/index'

import Home from './pages/home/home'
import Erro from './pages/erro/index'
import Filme from './pages/filme/index'


const Routes = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/filme/:id' component={Filme}/>
        <Route path='*' component={Erro}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes