import React from "react";
import Carrinho from './Carrinho';
import styled from 'styled-components'

const CarrinhoStyle = styled.div`
display: flex;
`

export default class Home extends React.Component {
    state = {
        produtos: this.props.produtos,
        produtosCarrinho: [],
    }

    componentDidUpdate() {
        console.log(this.state.produtosCarrinho)

    }

    AdicionarCarrinho(id) {
        const novoCarrinho = this.state.produtosCarrinho.concat(this.state.produtos.filter(
            (objeto) => {
                if (objeto.id === id) {
                    return true
                } else { return false }
            }
        )
        )
        this.setState({ produtosCarrinho: novoCarrinho })
    }
    render() {
        const carrinhoNovo = this.state.produtosCarrinho
        return (
            <CarrinhoStyle>            
            <div>   
                <ul>
                    {this.state.produtos.map((item) => {
                        return (
                            <div>
                                <li>
                                    <h4>{item.nome}</h4>
                                    <img src={item.img} />
                                    <p>R${item.valor}</p>
                                </li>
                                <button
                                    onClick={() => this.AdicionarCarrinho(item.id)}
                                >Adicionar ao Carrinho
                                </button>
                            </div>
                        )
                    })
                }
                </ul>
                </div>
                <div>
                    <Carrinho produtos={carrinhoNovo}/>
                </div>
            </CarrinhoStyle>
        );
    }
}