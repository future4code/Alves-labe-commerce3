
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
    filtro: "crescente",
    valorMin: "",
    valorMax: "",
    busca: ""
  };
  onChangeInput = (event) => {
    this.setState({ filtro: event.target.value });
    console.log(this.state.filtro);
  };
  onChangeBusca = (event) => {
    this.setState({ busca: event.target.value });
  }
  onChangePrecoMax = (event) => {
    this.setState({ valorMax: event.target.value });
  }
  onChangePrecoMin = (event) => {
    this.setState({ valorMin: event.target.value });
  }
  render() {


    return (

      <>
        <InputsContainer>
          <input
            value={this.state.busca}
            onChange={this.onChangeBusca}
            placeholder="Pesquisar" />
          <input value={this.state.valorMin}
            onChange={this.onChangePrecoMin}
            placeholder="Preço Min."
            type="Number" />
          <input value={this.state.valorMax}
            onChange={this.onChangePrecoMax}
            placeholder="Preço Max."
            type="Number" />
          <label>Filtrar</label>
          <select value={this.state.filtro} onChange={this.onChangeInput}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </InputsContainer>
        <Display>
          <Home produtosHome={this.state.produtos
            .filter(produto => {
              return produto.nome.toLowerCase().includes(this.state.busca.toLowerCase())
            })
            .filter(produto => {
              return this.state.valorMin === "" || produto.valor >= this.state.valorMin
            })
            .filter(produto => {
              return this.state.valorMax === "" || produto.valor <= this.state.valorMax
            })
            .sort((produtoAtual, produtoProximo) => {
              switch (this.state.filtro) {
                case "crescente":
                  return produtoAtual.valor - produtoProximo.valor
                default:
                  return produtoProximo.valor - produtoAtual.valor
              }
            }
            )




          } />
        </Display>

      </>
    );
  }
}
