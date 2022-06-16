import React from "react"


export default class Home extends React.Component {
    state = {
        produtos: this.props.produtos,
        produtosCarrinho : [],
        produtoAtual : {}
    }

    componentDidUpdate (){
        console.log(this.state.produtosCarrinho)
    }
  
    AdicionarCarrinho (event) {
        const novoProduto = {
            id: event.target.id,
            nome: event.target.nome,
            valor: event.target.preco,
          }
          const novoCarrinho = [...this.state.produtosCarrinho, novoProduto]
          this.setState({produtosCarrinho: novoCarrinho })
    }
    render() {
    
        return (
        <>
            <ul>
            {this.state.produtos.map((item)=>{
               return (
             <div>
                <li>  
                    <h4>{item.nome}</h4>
                    <img src = {item.img} />
                    <p>R${item.valor}</p> 
                </li>
                <button 
                onClick={()=>this.AdicionarCarrinho}
                id={item.id}
                nome={item.nome}
                preco={item.valor}
                >Adicionar ao Carrinho
                </button>
            </div>
               )
            })
            }
            </ul>
        </>
        );
    }
}