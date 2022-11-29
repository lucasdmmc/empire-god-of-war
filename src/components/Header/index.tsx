import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { ButtonCart, HeaderContainer, InputContainer, InputWithIcon } from "./styles";

import logoImg from "../../assets/logo.png"

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <img src={logoImg} alt="" />

        <ul>
          <li><a href="#">Jogos</a></li>
          <li><a href="#">Personagens</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>

        <InputContainer>
          <InputWithIcon>
            <MagnifyingGlass size={20}/>
            <input type="text" placeholder="Pesquisar" />
          </InputWithIcon>

          <ButtonCart>
            <ShoppingCart size={20}/>
            <span>1</span>
        </ButtonCart>
        </InputContainer>


        {/* <UserNameContainer>

          <UserName>
            <span className="user">Lucas</span>
            <UserJoined>
              <span className="joined">Logado</span>
              <span className="logout">Sair</span>
            </UserJoined>
          </UserName>

        </UserNameContainer> */}
      </header>
    </HeaderContainer>
  )
}