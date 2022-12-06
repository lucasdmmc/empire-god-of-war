import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { ButtonCart, HeaderContainer, InputContainer, InputWithIcon } from "./styles";
import { Link } from "react-scroll"

import logoImg from "../../assets/logo.png"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UseGames } from "../../hooks/UseGames";

export function Header() {
  const [searchForGames, setSearchForGames] = useState("")

  const [click] = useState(true)

  const {cartGames} = UseGames()

  const cartQuantity = cartGames.length

  function handleSearchGames() {
    setSearchForGames(searchForGames)
  }

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

            <MagnifyingGlass onClick={handleSearchGames} size={20}/>
            <input 
              type="text"
              placeholder="Pesquisar" 
              onChange={(e) => setSearchForGames(e.target.value)} />
          </InputWithIcon>

          {cartQuantity >= 1 ?
            <NavLink to="/checkout">
              <ButtonCart>
                <ShoppingCart size={20}/>
                <span>{cartQuantity}</span>
              </ButtonCart>
            </NavLink>
          : 
          <NavLink to="/checkout">
            <ButtonCart>
              <ShoppingCart size={20}/>
            </ButtonCart>
          </NavLink>
          }

        </InputContainer>
      </header>
    </HeaderContainer>
  )
}