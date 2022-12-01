import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import { CharactersContainer } from "./styles";

interface CharactersProps {
  name: string;
  photo: string;
}

export function Characters({ name, photo }: CharactersProps) {

  return (
    <CharactersContainer  className="keen-slider__slide">
      <img src={`/public/characters/${photo}`} alt="" />
      <span>{name}</span>
      <button>Saiba mais</button>
    </CharactersContainer>
  )
}