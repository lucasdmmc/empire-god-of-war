import { CardGamesContainer } from "./styles";
import  games from "../../data";
import { Games } from "../Games";

export function CardGames() {
  return (
      <CardGamesContainer>
        {games.map(games => (
          <Games key={games.id} games={games} />
        ))}
      </CardGamesContainer>
  )
}