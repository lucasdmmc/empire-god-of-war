import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import { ComponentProps } from "react";
import { IGames } from "../../contexts/GameContext";
import games from "../../data";
import { UseGames } from "../../hooks/UseGames";
import { Action, ButtonsContainer, Cancel, Content, Overlay } from "./styles";

// type RemoveGamesModalProps = ComponentProps<typeof Action>


export function RemoveGamesModal(){
  const {removeCartGame, cartGames} = UseGames()

  return(
    
  )
}