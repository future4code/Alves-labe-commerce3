import React from "react";
import Carrinho from "./Carrinho";
import styled from "styled-components";
import { ProdutoStyle } from "../style-projeto";

const CarrinhoStyle = styled.div`
  display: flex;
  width: 80%;
  align-self: end;
  justify-self: end;
`;
const Display = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`

export default class Home extends React.Component {
  state = {
    produtos: this.props.produtos,
    produtosCarrinho: [],
  };

  componentDidUpdate() {
    console.log(this.state.produtosCarrinho);
  }

  AdicionarCarrinho(id) {
    const novoCarrinho = this.state.produtosCarrinho.concat(
      this.state.produtos.filter((objeto) => {
        if (objeto.id === id) {
          return true;
        } else {
          return false;
        }
      })
    );
    this.setState({ produtosCarrinho: novoCarrinho });
  }
  render() {
    const carrinhoNovo = this.state.produtosCarrinho;
    return (
      <CarrinhoStyle>
        <Display>
          {this.state.produtos.map((item) => {
            return (
              <ProdutoStyle>
                <div>
                  <h4>{item.nome}</h4>
                  <img src={item.img} />
                  <p>R${item.valor}</p>
                </div>
                <button onClick={() => this.AdicionarCarrinho(item.id)}>
                  Adicionar ao Carrinho
                </button>
              </ProdutoStyle>
            );
          })}
        </Display>
        <Carrinho produtos={carrinhoNovo} />
      </CarrinhoStyle>
    );
  }
}
