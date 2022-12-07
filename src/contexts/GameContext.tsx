import { createContext, ReactNode, useEffect, useState } from "react";

export interface IGames {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface GameContextData {
  cartGames: IGames[]
  totalPrice: number
  removeCartGame: (gameId: number) => void;
  ifAlreadyExists: (gameId: number) => boolean;
  addGamesToCart: (games: IGames) => void;
  searchGames: (query?: string) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData)

export function GameContextProdivder({ children }: GameContextProviderProps) {
  const [cartGames, setCartGames] = useState<IGames[]>(() => {
    const saveCartGamesInStorege = localStorage.getItem("@:god-of-war")

    if(saveCartGamesInStorege) {
      return JSON.parse(saveCartGamesInStorege)
    } else {
      return []
    }

  })
  const [search, setSearch] = useState("")

  const totalPrice = cartGames.reduce((total, games ) => {
    return total + games.price
  }, 0)

  async function searchGames(query?: string) {
    const url = new URL("http://localhost:5173")

    if(query) {
      url.searchParams.append("q", query)
    }

  }

  function addGamesToCart(games: IGames) {
    setCartGames(state => [...state, games])
  }

  function removeCartGame(gameId: number) {
    setCartGames(cartGames.filter(game => game.id !== gameId))
  }

  function ifAlreadyExists(gameId: number) {
    return cartGames.some(game => game.id === gameId)
  }

  useEffect(() => {
    localStorage.setItem("@:god-of-war", JSON.stringify(cartGames))
    searchGames()
  }, [search, cartGames])

  return (
    <GameContext.Provider value={{ 
      cartGames, 
      addGamesToCart, 
      totalPrice, 
      removeCartGame,
      ifAlreadyExists,
      searchGames
     }}>
      {children}
    </GameContext.Provider>
  )
}