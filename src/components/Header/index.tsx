import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { HeaderContainer, InputContainer, InputWithIcon } from "./styles";
import { Link } from "react-scroll"

import logoImg from "../../assets/logo.png"
import { useRef, useState } from "react";
import { useGames } from "../../hooks/useGames";
import { CartButton } from "../CartButton";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const searchGamesSchema = z.object({
  query: z.string(),
})

type SearchGamesInput = z.infer<typeof searchGamesSchema>

export function Header() {
  const { register, handleSubmit} = useForm<SearchGamesInput>({
    resolver: zodResolver(searchGamesSchema)
  })

  const [click] = useState(true)

  const {cartGames, searchGames} = useGames()

  const cartQuantity = cartGames.length

  let inputRef = useRef()

  function handleSearchGames(data: SearchGamesInput) {
    console.log(data)
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
          <InputWithIcon onSubmit={handleSubmit(handleSearchGames)}>
            <button type="submit">
              <MagnifyingGlass size={20}/>
            </button>
            <input 
              type="text"
              placeholder="Pesquisar"
              {...register("query")}
            />
          </InputWithIcon>

          { 
            cartQuantity >= 1 ? 
            <CartButton quantity={cartQuantity}/>
          : 
            <CartButton />
          }
        </InputContainer>
        
      </header>
    </HeaderContainer>
  )
}