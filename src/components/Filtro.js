
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Home from './Home';

const InputsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
  const Display = styled.div`
  display: flex;
  
`
const Container = styled.div`
display: flex;

`
export default class Filtro extends React.Component {
  state = {
    produtos: this.props.produtos,
    filtro: "",
  };
  onChangeInput = (event) => {
    this.setState({ filtro: event.target.value });
    console.log(this.state.filtro);
  };
componentDidUpdate(){
}
render() {
  
  
  if(this.state.filtro === "crescente"){
    let listaCrescente = [...this.state.produtos];
    listaCrescente = listaCrescente.sort(function (a, b) {
        return a - b;
      })
          this.setState({produtos: listaCrescente})
      
      }else if(this.state.filtro === "descrescente"){
    let listaDecrescente = [...this.state.produtos];
    listaDecrescente = listaDecrescente.sort(function (a, b) {
          return b - a;
      })
      this.setState({produtos: listaDecrescente})
  }
  

    return (
        <Container>
      <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filtro} onChange={this.onChangeInput}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
      </InputsContainer>
      <Display>
        <Home produtos={this.state.produtos}/>
      </Display>
     
      </Container>
    );
  }
}
