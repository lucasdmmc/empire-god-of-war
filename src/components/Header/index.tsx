import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { ButtonCart, HeaderContainer, InputContainer, InputWithIcon } from "./styles";
import { Link } from "react-scroll"

import logoImg from "../../assets/logo.png"
import { useState } from "react";

export function Header() {
  const [click, setClick] = useState(true)
  const CloseMenu = () => setClick(false)

  return (
    <HeaderContainer >
      <header>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>

        <ul className={click ? "menu-item active" : "menu-item"}>
          <li className="nav-item" >
            <Link 
              to="home"
              spy={true} 
              smooth={true} 
              offset={-200}
              duration={1200}

            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="games" 
              spy={true} 
              smooth={true} 
              offset={-200}
              duration={800}
            >
              Jogos
            </Link>
          </li>
          <li className="nav-item"><a href="#">Personagens</a></li>
          <li className="nav-item"><a href="#">História</a></li>
          <li className="nav-item"><a href="#">Contato</a></li>
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