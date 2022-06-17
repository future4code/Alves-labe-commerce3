import React from "react";
<<<<<<< HEAD
// import Carrinho from './Carrinho';
import styled from "styled-components";

const BoxCarrinho = styled.div`
border : solid black;

`
=======
import Carrinho from './Carrinho';
import styled from 'styled-components'
>>>>>>> c576af944780899f6355bf6a8f886596975e9034

const CarrinhoStyle = styled.div`
display: flex;
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
<<<<<<< HEAD
            <>


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

                <BoxCarrinho>
                    <ul>
                        {carrinho}
                    </ul>
                    <h5>Total: R${this.state.precofinal.toFixed(2)}</h5>
                </BoxCarrinho>
            </>
=======
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
>>>>>>> c576af944780899f6355bf6a8f886596975e9034
        );
    }
}