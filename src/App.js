import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Home from './components/Home';

export default class App extends React.Component {
  state = {
    produtos : ['aaaa', 'bbbbb', 'ccccc']
  }
  
  render(){

  return (
    <div>
     

      <Filtro produtos={this.state.produtos}/> 
      <Home produtos={this.state.produtos}/>
      <Carrinho produtos={this.state.produtos}/>

  
    </div>
  );
}
}

