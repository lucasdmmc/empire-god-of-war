import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { StyledButton } from "../../components/Button/styles";
import { useGames } from "../../hooks/useGames";
import { SuccessContainer, SuccessContent } from "./styles";

export function Success() {
  const {cartGames, cartClear} = useGames()
  const cartQuantity = cartGames.length
  return (
    <div>
      <SuccessContainer>
        <SuccessContent>
        
          <h2>Parabéns por finalizar a compra</h2>
          <h3>
            Você comprou {cartQuantity} {cartQuantity === 1 ? "jogo" : "jogos"}
          </h3>
        <span>
          {cartQuantity === 1 ? " O" : " Os "}
          {cartQuantity === 1 ? " jogo" : " jogos "}
          {cartQuantity === 1 ? " está" : " estão "}
          {cartQuantity === 1 ? " disponivel" : " disponiveis "}{" "}
          para download. Clique no botão abaixo.
        </span>

      
        <h4>
        {cartQuantity === 1 ? " Jogo" : " Jogos "}
        {cartQuantity === 1 ? " comprado" : " comprados "}:

        {cartGames.map(game => (
          <span className="gameName">
            <br />
            {game.name}
          </span> 
        ))}
        
        </h4>

        <StyledButton text="regular" variant="red">
            Clique aqui para fazer download
          </StyledButton>
        <Link onClick={cartClear} to="/">
          <ArrowLeft size={20}/>
          Voltar para página inicial
        </Link>
        </SuccessContent>

      </SuccessContainer>
    </div>
 
  )
}