// oi, eu tentei

import styled from "styled-components";


// AQUI FICA O HEADER :D
export const HeaderStyle = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  img {
    width: 15vw
  }
  text-transform: uppercase;
  font-weight: 700;
  background-color: #30317B;
  color: #ABABCB;
  h1 {
    align-self: center
  }
`

// AQUI FICA O FILTRO ^u^


// AQUI FICA O CARRINHO n.n
export const BoxCarrinho = styled.div`
  width: 30%;
  border: solid 1px #B8CAD4;
  text-align: center;
  text-transform: uppercase;
  color: #30317B;
  font-family: arial;
`

export const CarrinhoStyle = styled.div`
  display: flex;
  width: 100%;
  align-self: end;
  justify-items: center;
  justify-self: end;
`

// AQUI FICA O CORPO DOS PRODUTOS <3
export const DisplayHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap : 2rem;
  align-items: center;
  justify-content: center;
  width: 70%;
  img {
    width: 200px;
    height: 420px;
    margin: 0.5rem 0 3rem 0;
    box-shadow:3px 3px 3px #1f1f1f;
  }
  h4{
   line-break: loose;
  }
  text-align: center;
  text-transform: uppercase;
  color: #30317B;
  font-family: arial;
`


// AQUI FICA O BODY DO FILTRO :)
export const InputsContainer = styled.div`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  width: 15%;
  gap: 10px;
  border: solid 1px #B8CAD4;
  select {
    border-top: none;
    border-left: none;
    height: 2rem;
    font-size: 110%;
    color: #30317B;
    font-weight: 700;
    background-color: #ABABCB
  }
  label{
    height: 2rem;
    font-size: 120%;
    color: #30317B;
    font-weight: 700;
  }
  input{
    border-top: none;
    border-left: none;
    height: 2rem;
    font-size: 110%;
    color: #30317B;
    font-weight: 700;
    background-color: #ABABCB
  }
`

export const Display = styled.div`
  display: flex;
  width: 100%;
 
`

// AQUI FICA OS PRODUTOS *u*
export const ProdutoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
`

// AQUI FICA O FOOTER :3
export const FooterStyle = styled.footer`
  display: flex;
  justify-content: right;
  background-color: #ABABCB;
  padding: 20px 20px
  img {
    width: 20px
  }
`

export const PaginaToda = styled.div `
  display: flex;
  flex-direction: row;
  background-color:#ABABCB;

`
export const BoxDescricao = styled.div `
 width: 40%;
`
export const CarrinhoIcone = styled.img `
  width:10px;
`
export const ImagemProduto = styled.img `
  width:15vw;
`