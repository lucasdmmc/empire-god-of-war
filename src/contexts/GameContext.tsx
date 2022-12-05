import { createContext, ReactNode, useState } from "react";

export interface IGames {
  id: string;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface GameContextData {
  cartGames: IGames[]
  totalPrice: number
  removeCartGame: (gameId: string) => void;
  addGamesToCart: (games: IGames) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData)

export function GameContextProdivder({ children }: GameContextProviderProps) {
  const [cartGames, setCartGames] = useState<IGames[]>([])

  const totalPrice = cartGames.reduce((total, games ) => {
    return total + games.price
  }, 0)


  function addGamesToCart(games: IGames) {
    setCartGames(state => [...state, games])
  }

  function removeCartGame(gameId: string) {
    setCartGames(state => state.filter(game => game.id !== gameId))
  }
  return (
    <GameContext.Provider value={{ cartGames, addGamesToCart, totalPrice, removeCartGame }}>
      {children}
    </GameContext.Provider>
  )
}