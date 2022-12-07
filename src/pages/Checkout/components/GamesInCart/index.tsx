import { 
  GamesInCartContainer, 
  GamesInCartContent, 
  GamesInCartWrapper, 
  RemoveGame, 
  Platform, 
  GameName, 
  Footer,
  } from "./styles";
import { ArrowLeft, WindowsLogo, X } from "phosphor-react";
import { RemoveGamesModal } from "../RemoveGamesModal";
import { priceFormatter } from "../../../../utils/FormatMoney";
import { useGames } from "../../../../hooks/useGames";
import { Header } from "../Header";
import { Link } from "react-router-dom";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export function GamesInCart() {
  const {cartGames} = useGames()

  const formatted = priceFormatter

  return (
    <GamesInCartContainer>
      <Header />
      <GamesInCartWrapper>
      {cartGames.map(game => (
        <GamesInCartContent key={game.id}>
          <img src={`/public/games/${game.photo}`} alt="" />
          <GameName>
            <strong>Jogo</strong>
            <span>{game.name}</span>
          </GameName>
          <Platform>
            <span>Windows</span>
            <WindowsLogo size={20} weight="fill" />
          </Platform>
          <strong>{formatted.format(game.price)}</strong>
        
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <RemoveGame type="button">
                <X size={20}/>
              </RemoveGame>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <RemoveGamesModal />
            </AlertDialog.Portal>
          </AlertDialog.Root>

        </GamesInCartContent>
      ))}
    </GamesInCartWrapper>
      <Footer>
        <Link to="/">
          <ArrowLeft size={20} />
          <span>Voltar para página inicial</span>
        </Link>
      </Footer>
    </GamesInCartContainer>
  )
}