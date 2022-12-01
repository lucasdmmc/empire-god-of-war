import { CharactersContainer } from "./styles";
import "keen-slider/keen-slider.min.css"
import { CardCharacters } from "../../../../components/CardCharacters";

import titleCharacters from "../../../../assets/title-characters.png"

export function Characters() {
  return (
    <CharactersContainer id="characters">
      <img src={titleCharacters} alt="" />
      <CardCharacters />
    </CharactersContainer>
  )
}