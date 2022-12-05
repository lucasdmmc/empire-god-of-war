import { IGames } from "../../contexts/GameContext";
import { UseGames } from "../../hooks/UseGames";
import { GamesContainer, InfoCardGames, InfoToBuyGame, Tags } from "./styles";

interface GamesProps {
  games: IGames
}

export function Games({ games }: GamesProps) {
  
  const { addGamesToCart } = UseGames()
  console.log(addGamesToCart)

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
          <button type="button" onClick={() => addGamesToCart(games)}>Colocar no carrinho</button>
        </InfoToBuyGame>


      </InfoCardGames>
    </GamesContainer>
  )
}