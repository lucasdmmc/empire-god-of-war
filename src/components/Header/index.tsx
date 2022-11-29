import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { HeaderContainer, InputContainer, UserName, UserNameContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <strong>Empire God of war</strong>

        <ul>
          <li><a href="#">Jogos</a></li>
          <li><a href="#">Personagens</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>

        <InputContainer>
          <MagnifyingGlass size={20}/>
          <input type="text" placeholder="Pesquisar" />
        </InputContainer>

        <UserNameContainer>
          <UserName>Bem vindo, Lucas</UserName>
          <button>
            <ShoppingCart size={20}/>
            <span>1</span>
          </button>
        </UserNameContainer>
      </header>
    </HeaderContainer>
  )
}