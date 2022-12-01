import { useKeenSlider } from "keen-slider/react";
import { characters } from "../../data/characters";
import { Characters } from "../Characters";
import { CardCharactersContainer } from "./styles";

export function CardCharacters() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 17,
      origin: "center"
    },
  })

  return (
    <CardCharactersContainer data-aos="fade-left" ref={sliderRef}>
      {characters.map(character => (
        <Characters 
          key={character.id} 
          name={character.name} 
          photo={character.photo} 
      />
      ))}
    </CardCharactersContainer>
  )
}