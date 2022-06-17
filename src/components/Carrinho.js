import React from "react";
import styled from "styled-components";

const BoxCarrinho = styled.div`
border : solid black;

`

export default class Carrinho extends React.Component {

    state = {
        produtos: this.props.produtos,
        precofinal : 0,
        }

    componentDidUpdate() {
        console.log(this.state.produtos)
        this.atualizaCarrinho()
        console.log(this.state.precofinal)
        this.precoFinal()

    }
    atualizaCarrinho() {
        if (this.state.produtos !== this.props.produtos)
        {
            this.setState({produtos: this.props.produtos})
        } 
    }
    precoFinal(){
        let soma = 0.0001
        let preco = this.state.produtos.map ((item)=> {return item.valor})
        for (let index = 0; index < preco.length; index++) {
            soma += preco[index]

        }
        
        if (this.state.precofinal !== soma) {
        this.setState({precofinal: soma})}
    }

    render() {
        const carrinho = this.state.produtos.map((item) => {
            return (
                <li>
                    <h4>{item.nome}</h4>
                    <p>{item.valor}</p>
                </li>
            )
        })

        return (
            <BoxCarrinho>
                <ul>
                {carrinho}
                </ul>
                <h5>Total: R${this.state.precofinal.toFixed(2)}</h5>
            </BoxCarrinho>
        );
    }
}