import { useGames } from "../../../../hooks/useGames";
import { priceFormatter } from "../../../../utils/FormatMoney";
import { SummaryContainer } from "./styles";

export function Summary() {
  const { totalPrice, cartGames } = useGames()
  const cartQuantity = cartGames.length
  const formatted = priceFormatter
  
  return (
    <SummaryContainer>
      <h2>Resumo</h2>
      <div>
        <h2>{cartQuantity} {cartQuantity === 1 ? 'Jogo' : 'Jogos '}</h2>
        <section>
          <strong>Total</strong>
          <span>{formatted.format(totalPrice)}</span>
        </section>
      </div>
      <select>
        {cartGames.map(game => (
          <option key={game.id} value="games">{game.name}</option>
        ))}
      </select>
    </SummaryContainer>
  )
}