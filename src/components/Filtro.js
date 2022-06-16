
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

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
    let listaCrescente = [...this.state.produtos];
    listaCrescente = listaCrescente.sort(function (a, b) {
      return a - b;
    })
    
    let listaDecrescente = [...this.state.produtos];
    listaDecrescente = listaDecrescente.sort(function (a, b) {
        return b - a;
    })
    if(this.state.filtro === "crescente"){
        this.setState({produtos: listaCrescente})
    
    }else if(this.state.filtro === "descrescente"){
        this.setState({produtos: listaDecrescente})
    }
}
  render() {
   
     

    return (
        <>
      <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filtro} onChange={this.onChangeInput}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
      </InputsContainer>
      
     
      </>
    );
  }
}
