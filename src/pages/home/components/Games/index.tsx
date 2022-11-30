import { CardGames } from "../../../../components/CardGames";
import { BetterExperience, GameContainer } from "./styles";

export function Games() {
  return (
    <GameContainer data-aos="fade-up" id="games">
      <BetterExperience>
        <div >
          <strong>Jogos vendidos na ordem cronológica</strong>

          <span>Para ter uma melhor experiência em God of War, recomendamos comprar os jogos na ordem cronológica, para poder entender toda a história de Kratos, o Deus da Guerra!</span>
        </div>
      </BetterExperience>
    <CardGames />
  </GameContainer>
  )
}