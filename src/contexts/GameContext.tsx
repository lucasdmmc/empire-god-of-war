import { ChangeEvent, createContext, ReactNode, useState } from "react";

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
  onChangeGames: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData)

export function GameContextProdivder({ children }: GameContextProviderProps) {
  const [cartGames, setCartGames] = useState<IGames[]>([])
  const [searchGames, setSearchGames] = useState("")

  const totalPrice = cartGames.reduce((total, games ) => {
    return total + games.price
  }, 0)


  function addGamesToCart(games: IGames) {
    setCartGames(state => [...state, games])
  }

  function removeCartGame(gameId: number) {
    setCartGames(state => state.filter(game => game.id !== gameId))
  }

  function ifAlreadyExists(gameId: number) {
    return cartGames.some(game => game.id === gameId)
  }

  function onChangeGames(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault()
  }
  return (
    <GameContext.Provider value={{ 
      cartGames, 
      addGamesToCart, 
      totalPrice, 
      removeCartGame,
      ifAlreadyExists,
      onChangeGames
     }}>
      {children}
    </GameContext.Provider>
  )
}