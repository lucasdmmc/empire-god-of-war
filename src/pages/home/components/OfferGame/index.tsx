import { Star } from "phosphor-react";
import { StyledButton } from "../../../../components/Button/styles";
import { useGames } from "../../../../hooks/useGames";

import imageGOW5 from "../../../../../public/god-of-war-5-capa.png"
import titleRagnarok from "../../../../../public/title-gow-ragnarok.png"
import { BuyProduct, InfoGame, MainCover, Note, OfferGameContainer, ProductPrice, Stars } from "./styles";

export function OfferGame() {
  return (
    <OfferGameContainer id="home">
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
          <span className="newPrice">R$ 245,00</span>
        </ProductPrice>


        <StyledButton variant="red" text="lager">
          Comprar na promoção
        </StyledButton>

        <StyledButton  variant="red" background="none" text="lager">
          Adicionar no carrinho
        </StyledButton>

      </BuyProduct>

    </MainCover>
  </OfferGameContainer>
  )
}