import { Header } from "../../components/Header";
import { HomeContainer, MainContainer, MainCover } from "./styles";

import imageGOW5 from "../../assets/god-of-war-5-capa.png"
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/Button/styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <MainCover>
          <img src={imageGOW5} alt="" />
          <div>
            <span>porcentagem da oferta</span>
            <span>preço</span>
            <ButtonContainer 
              variant="red" 
              title="Comprar"
            >
              Comprar
            </ButtonContainer>
          </div>
        </MainCover>
      </MainContainer>
    </HomeContainer>
  )
}