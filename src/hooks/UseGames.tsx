import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function UseGames() {
  return useContext(GameContext)
}