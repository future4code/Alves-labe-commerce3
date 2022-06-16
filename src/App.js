import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import listaDeProdutos from './components/produtos/Produtos';
import { FooterStyle, HeaderStyle } from './style-projeto';
import logoIcon from './img/logo-icon.png';
import Facebook from './img/img-fb.png';
import YouTube from './img/img-yt.png';
import Instagram from './img/img-ig.png';


export default class App extends React.Component {
  state = {
    produtos: listaDeProdutos
  }

  render() {
    console.log(this.state.produtos)
    return (

      <div>
        <HeaderStyle> 
          <img src={logoIcon} alt="Logotipo do site" /> 
          <h1>Book Space</h1>
        </HeaderStyle>


      
      <Home produtos={this.state.produtos}/>



        <FooterStyle>
        <img src={Facebook} alt="Facebook" href="a" />
        <img src={Instagram} alt="Instagram" href="a" />
        <img src={YouTube} alt="YouTube" href="a" />
        </FooterStyle>

      </div>
    );
  }
}

