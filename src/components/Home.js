import React from "react";
import styled from "styled-components";
import { ProdutoStyle } from "../style-projeto";




const BoxCarrinho = styled.div`
border : solid black;
`



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
        produtos: this.props.produtosHome,
        produtosCarrinho: [],
        precofinal: 0,
    }

    componentDidUpdate() {
        console.log(this.state.produtosCarrinho)
        this.atualizaHome()

    }
    atualizaHome() {
        if (this.state.produtos !== this.props.produtosHome) {
            this.setState({ produtos: this.props.produtosHome })
        }
    }
    AdicionarCarrinho(id) {
        const novoCarrinho = this.state.produtosCarrinho
            .concat(this.state.produtos.filter((objeto) => {
                if (objeto.id === id) {
                    return true
                } else { return false }
            })
                .map((objeto) => {
                    return {
                        ...objeto,
                        id: Date.now()
                    }
                })
            )
        this.setState({ produtosCarrinho: novoCarrinho })
    }
    precoFinal() {
        let soma = 0.0001
        let preco = this.state.produtos.map((item) => { return item.valor })
        for (let index = 0; index < preco.length; index++) {
            soma += preco[index]

        }

        if (this.state.precofinal !== soma) {
            this.setState({ precofinal: soma })
        }
    }
    removeItem(id) {
        const carrinhoRemovido = this.state.produtosCarrinho
            .filter((objeto) => {
                if (objeto.id !== id) {
                    return true
                } else { return false }
            })
        this.setState({ produtosCarrinho: carrinhoRemovido })
    }
    render() {
        const carrinho = this.state.produtosCarrinho.map((item) => {
            return (
                <>
                    <li>
                        <h4>{item.nome}</h4>
                        <p>{item.valor}</p>
                    </li>
                    <button onClick={() => this.removeItem(item.id)}>Remover</button>
                </>
            )
        })
        return (

=======
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
                                <button
                                    onClick={() => this.AdicionarCarrinho(item.id)}
                                >Adicionar ao Carrinho
                                </button>
                            </ProdutoStyle>
                        )
                    })
                }
               </Display>
                    <BoxCarrinho>
                    <ul>
                        {carrinho}
                    </ul>
                    <h5>Total: R${this.state.precofinal.toFixed(2)}</h5>
                </BoxCarrinho>
            </>
      
               
              </CarrinhoStyle>
        );
    }
}

