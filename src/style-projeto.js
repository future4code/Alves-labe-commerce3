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
export const FiltroStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: #ABABCB;
  height: 100%;
  align-items: flex-start;
`

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
  justify-self: end;
`

// AQUI FICA O CORPO DOS PRODUTOS <3
export const DisplayHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: 420px;
    margin: 3rem;
    box-shadow:3px 3px 3px #1f1f1f;
  }
  text-align: center;
  text-transform: uppercase;
  color: #30317B;
  font-family: arial;
`


// AQUI FICA O BODY DO FILTRO :)
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: end;
  gap: 10px;
`

export const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// AQUI FICA OS PRODUTOS *u*
export const ProdutoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img { 
    width:15vw
  };
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


