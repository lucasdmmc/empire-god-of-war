import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { ButtonCart, HeaderContainer, InputContainer, InputWithIcon } from "./styles";
import { Link } from "react-scroll"

import logoImg from "../../assets/logo.png"
import { useState } from "react";

export function Header() {
  const [click] = useState(true)

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
              // smooth={true} 
              offset={-200}
              duration={50}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="games" 
              spy={true} 
              smooth={true} 
              offset={-150}
              duration={700}
            >
              Jogos
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="characters"
              spy={true} 
              smooth={true} 
              offset={-100}
              duration={500}
            >
              Personagens
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="history"
              spy={true} 
              smooth={true} 
              offset={-100}
              duration={500}
            >  
              História
            </Link>
          </li>
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