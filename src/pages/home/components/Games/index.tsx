import { CardGames } from "../../../../components/CardGames";
import { BetterExperience, GameContainer } from "./styles";
import titleImg from "../../../../assets/title-games.png"

export function Games() {
  return (
    <GameContainer data-aos="fade-up" id="games">
      <BetterExperience>
        <div >
          <img src={titleImg} alt="" />

          {/* <span>Para ter uma melhor experiência em God of War, recomendamos comprar os jogos na ordem cronológica, para poder entender toda a história de Kratos, o Deus da Guerra!</span> */}
        </div>
      </BetterExperience>
    <CardGames />
  </GameContainer>
  )
}