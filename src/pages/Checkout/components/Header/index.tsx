import { CartButton } from "../../../../components/CartButton";
import { useGames } from "../../../../hooks/useGames";
import { HeaderContainer } from "./styles";

export function Header() {
  const { cartGames } = useGames()

  const cartQuantity = cartGames.length

  return (
    <HeaderContainer>
      <h2>Meu carrinho</h2>

      {
        cartQuantity >= 1 ?
        <CartButton quantity={cartQuantity}/>
        :
        <CartButton />
      }
    </HeaderContainer>
  )
}