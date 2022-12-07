import { 
  CheckoutContainer, 
  CheckoutContent, 
  SummaryAndPayment
  } from "./styles";
import { useGames } from "../../hooks/useGames";
import { EmpityCart } from "../../components/EmpityCart";
import { GamesInCart } from "./components/GamesInCart";
import { Summary } from "./components/Summary";
import { Payment } from "./components/Payment";

export function Checkout() {

  const { cartGames } = useGames()

  const cartQuantity = cartGames.length
  return (
    <CheckoutContainer>
      <CheckoutContent>
        { 
          cartQuantity === 0 ?
          <EmpityCart /> :

          <>
            <GamesInCart />

            <SummaryAndPayment>
              <Summary />
              <Payment />
            </SummaryAndPayment>
          </>
        }
      </CheckoutContent>
    </CheckoutContainer>
  )
}