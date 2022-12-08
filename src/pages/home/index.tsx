import { 
  BuyProduct,  
  HomeContainer, 
  InfoGame, 
  MainContainer, 
  MainCover, 
  Note, 
  ProductPrice, 
  Stars 
} from "./styles";
import { Header } from "../../components/Header";
import { StyledButton } from "../../components/Button/styles";
import { Star } from "phosphor-react";

import imageGOW5 from "../../assets/god-of-war-5-capa.png"
import titleRagnarok from "../../assets/title-gow-ragnarok.png"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Games } from "./components/Games";
import { Characters } from "./components/Characters";
import { History } from "./components/History";
import { OfferGame } from "./components/OfferGame";



export function Home() {

  useEffect(() => {
    Aos.init({  duration: 2000 })
  }, [])

  return (
    <HomeContainer >
      <Header />
      
      <OfferGame />

      <Games />
      <Characters />
      <History />  
    </HomeContainer>
  )
}