import React from "react";
import Carrinho from './Carrinho';


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
            <>
            
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
                <Carrinho produtos={carrinhoNovo}/>
                </ul>
            </>
        );
    }
}