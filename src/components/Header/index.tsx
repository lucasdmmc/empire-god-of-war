import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { HeaderContainer, InputContainer, InputWithIcon } from "./styles";
import { Link } from "react-scroll"
import logoImg from "../../assets/logo.png"
import { useState } from "react";
import { useGames } from "../../hooks/useGames";
import { CartButton } from "../CartButton";

export function Header() {

  const [click] = useState(true)

  const {cartGames} = useGames()

  const cartQuantity = cartGames.length
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


        { 
          cartQuantity >= 1 ? 
          <CartButton quantity={cartQuantity}/>
        : 
          <CartButton />
        }
        
      </header>
    </HeaderContainer>
  )
}