import { IGames } from "../../contexts/GameContext";
import { useGames } from "../../hooks/useGames";
import { priceFormatter } from "../../utils/FormatMoney";
import { GamesContainer, InfoCardGames, InfoToBuyGame, Tags } from "./styles";

interface GamesProps {
  games: IGames
}

export function Games({ games }: GamesProps) {
  
  const { addGamesToCart, ifAlreadyExists } = useGames()

  const ifAlreadyExistsGame = ifAlreadyExists(games.id)

  const formatted = priceFormatter

  return (
    <GamesContainer>
      <InfoCardGames key={games.id}>
        <img src={`/public/games/${games.photo}`} alt="" />

        <strong>{games.name}</strong>
        <p>{games.description}</p>

        <Tags>
          {games.tags.map(tag => (
            <p>{tag}</p>
          ))}
        </Tags>

        <InfoToBuyGame>
          <strong>{formatted.format(games.price)}</strong>
          
          {ifAlreadyExistsGame ?
            <button
              disabled
              type="button" 
              onClick={() => addGamesToCart(games)}>
              Colocar no carrinho
           </button>
          :
            <button
              type="button" 
              onClick={() => addGamesToCart(games)}>
              Colocar no carrinho
            </button>
          }

        </InfoToBuyGame>


      </InfoCardGames>
    </GamesContainer>
  )
}