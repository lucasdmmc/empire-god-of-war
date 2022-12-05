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
import { ButtonContainer } from "../../components/Button/styles";
import { Star } from "phosphor-react";

import imageGOW5 from "../../assets/god-of-war-5-capa.png"
import titleRagnarok from "../../assets/title-gow-ragnarok.png"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Games } from "./components/Games";
import { Characters } from "./components/Characters";
import { History } from "./components/History";

export function Home() {

  useEffect(() => {
    Aos.init({  duration: 2000 })
  }, [])

  return (
    <HomeContainer >
      <Header />
      <MainContainer id="home">
        <img src={titleRagnarok} alt="" id="home"/>

        <MainCover data-aos="fade-left" >
          <img src={imageGOW5} alt="" />

          <BuyProduct>
            <Stars>
              <Star size={20} weight="fill"/>
              <Star size={20} weight="fill"/>
              <Star size={20} weight="fill"/>
              <Star size={20} weight="fill"/>
              <Star size={20} weight="fill"/>

              <Note>
                <span>5.0</span>
              </Note>
            </Stars>

            <InfoGame>
              <strong>O ragnarok chegou</strong>
              
              <p>
                Diferente do primeiro jogo, tudo indica que Freya será uma grande inimiga em God of War Ragnarök, a deusa perseguirá Kratos para vingar a morte de seu filho, Baldur.
              </p>

              <ul>
                <li>Aventura</li>
                <li>RPG Eletrônico</li>
              </ul>
            </InfoGame>

            <ProductPrice>
              <span className="percentage"> -30% </span>
              <span className="oldPrice"> R$ 350,00 </span>
              <span className="newPrice"> R$ 245,00 </span>
            </ProductPrice>


            <ButtonContainer variant="red" text="lager">
              Comprar na promoção
            </ButtonContainer>

            <ButtonContainer variant="red" background="none" text="lager">
              Adicionar no carrinho
            </ButtonContainer>

          </BuyProduct>
        </MainCover>
      </MainContainer>

      <Games />
      <Characters />
      <History />  
    </HomeContainer>
  )
}