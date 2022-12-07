import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import { useGames } from "../../../../hooks/useGames";
import { Action, ButtonsContainer, Cancel, Content, Overlay } from "./styles";

export function RemoveGamesModal(){
  const {removeCartGame, cartGames} = useGames()

  return (
    <>
      {cartGames.map(game => (
        <>
          <Overlay />
          <Content>

            <AlertDialog.Title>
              <strong>Tem certeza que deseja remover jogo do carrinho?</strong>
            </AlertDialog.Title>

            <ButtonsContainer>
              <Cancel>
                Cancelar
              </Cancel>
              <Action
                type="button"
                onClick={() => removeCartGame(game.id)}>
                Remover
              </Action>
            </ButtonsContainer>
          </Content>
        </>
      ))}
    </>
  )
}