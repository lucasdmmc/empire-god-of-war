import { ArrowLeft, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { EmpityCartContainer } from "./styles";

export function EmpityCart() {
  return (
    <EmpityCartContainer>
      <ShoppingCart size={200}/>
      <strong>Seu carrinho está vazio :(</strong>
      <span>Por favor, adicione jogos ao carrinho para poder finalizar sua compra!</span>

      <NavLink to="/">
        <ArrowLeft />
        Voltar para página inicial
      </NavLink>
    </EmpityCartContainer>
  )
}