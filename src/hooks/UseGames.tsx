import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function useGames() {
  return useContext(GameContext)
}