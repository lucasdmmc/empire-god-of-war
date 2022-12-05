import { ShoppingCart } from "phosphor-react";
import games from "../../data";
import { GamesContainer, InfoCardGames, InfoToBuyGame, Tags } from "./styles";

interface GamesProps {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

 export interface Games {
  games: GamesProps
}

export function Games({ games }: Games) {
  return (
    <GamesContainer>
      <InfoCardGames>
        <img src={`/public/games/${games.photo}`} alt="" />

        <strong>{games.name}</strong>
        <p>{games.description}</p>

        <Tags>
          {games.tags.map(tag => (
            <p>{tag}</p>
          ))}
        </Tags>

        <InfoToBuyGame>
          <span>R$ <strong>{games.price}</strong></span>
          <button>Colocar no carrinho</button>
        </InfoToBuyGame>


      </InfoCardGames>
    </GamesContainer>
  )
}