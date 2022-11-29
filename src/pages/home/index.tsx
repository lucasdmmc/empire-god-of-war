import { Header } from "../../components/Header";
import { BuyProduct, HomeContainer, InfoGames, MainContainer, MainCover, Note, ProductPrice, Stars } from "./styles";

import imageGOW5 from "../../assets/god-of-war-5-capa.png"
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/Button/styles";

import titleRagnarok from "../../assets/title-gow-ragnarok.png"
import { Star } from "phosphor-react";


export function Home() {
  return (
    <>
    <Header />
      <HomeContainer>
        <MainContainer>
          <img src={titleRagnarok} alt="" />
          <MainCover>
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

              <InfoGames>
                <strong>O ragnarok chegou</strong>

                <p>
                  Diferente do primeiro jogo, tudo indica que Freya será uma grande inimiga em God of War Ragnarök, a deusa perseguirá Kratos para vingar a morte de seu filho, Baldur.
                </p>

                <ul>
                  <li>Aventura</li>
                  <li>RPG Eletrônico</li>
                </ul>
              </InfoGames>

              <ProductPrice>
                <span className="percentage"> -30% </span>
                <span className="oldPrice"> R$ 350,00 </span>
                <span className="newPrice"> R$ 245,00 </span>
              </ProductPrice>


              <ButtonContainer variant="red" text="lager">
                Comprar na pré-venda
              </ButtonContainer>

              <ButtonContainer variant="red" background="none" text="lager">
                Adicionar no carrinho
              </ButtonContainer>

            </BuyProduct>
          </MainCover>
        </MainContainer>
      </HomeContainer>
      
    </>
  )
}