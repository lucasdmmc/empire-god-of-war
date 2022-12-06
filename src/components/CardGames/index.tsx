import { CardGamesContainer } from "./styles";
import  games from "../../data";
import { Games } from "../Games";

export function CardGames() {
  return (
      <CardGamesContainer>
        {games.map(game => (
          <Games key={game.id} games={game} />
        ))}
      </CardGamesContainer>
  )
}