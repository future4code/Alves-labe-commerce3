import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
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
     

      
      <Home produtos={this.state.produtos}/>


  
    </div>
  );
}
}

