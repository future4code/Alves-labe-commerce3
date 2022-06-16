import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Home from './components/Home';
import listaDeProdutos from './components/produtos/Produtos';

export default class App extends React.Component {
  state = {
    produtos : listaDeProdutos
  }
  
  render(){
    console.log(this.state.produtos)
  return (

    <div>
     

      <Filtro produtos={this.state.produtos}/> 
      <Home produtos={this.state.produtos}/>
      <Carrinho produtos={this.state.produtos}/>

  
    </div>
  );
}
}

