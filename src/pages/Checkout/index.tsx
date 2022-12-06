import {  ArrowLeft, ShoppingCart, WindowsLogo, X } from "phosphor-react";
import { 
  ButtonCart, 
  CartGames,
  CartGamesContainer, 
  CheckoutContent, 
  CheckoutShopping, 
  CheckoutShoppingContainer, 
  Payment, 
  Platform, 
  ShoppingCartContainer, 
  Summary
  } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { UseGames } from "../../hooks/UseGames";
import { priceFormatter } from "../../components/utils/FormatMoney";
import { IGames } from "../../contexts/GameContext";
import { EmpityCart } from "../../components/EmpityCart";


export function Checkout() {

  const { cartGames, totalPrice, removeCartGame } = UseGames()

  const cartQuantity = cartGames.length

  const formatted = priceFormatter

  return (
    <CheckoutShoppingContainer>
      <CheckoutShopping data-aos="fade-left">
        {cartQuantity === 0 ?
          <EmpityCart />

        :
        <>
          <ShoppingCartContainer>
              <header>
                <h2>Meu carrinho</h2>
                {cartQuantity >= 1 ?
                  <ButtonCart>
                    <ShoppingCart size={20} />
                    <span>{cartQuantity}</span>
                  </ButtonCart>
                  :
                  <ButtonCart>
                    <ShoppingCart size={20} />
                  </ButtonCart>}
              </header>


              <CartGamesContainer>
                {cartGames.map(game => (
                  <CartGames>
                    <img src={`/public/games/${game.photo}`} alt="" />
                    <div>
                      <strong>Jogo</strong>
                      <span>{game.name}</span>
                    </div>
                    <Platform>
                      <span>Windows</span>
                      <WindowsLogo size={20} weight="fill" />
                    </Platform>
                    <strong>{formatted.format(game.price)}</strong>
                    <button type="button" onClick={() => removeCartGame(game.id)}><X size={20} /></button>
                  </CartGames>
                ))}

              </CartGamesContainer>

              <footer>
                <Link to="/">
                  <ArrowLeft size={20} />
                  <span>Voltar para página inicial</span>
                </Link>
              </footer>
            </ShoppingCartContainer><CheckoutContent>
                <h2>Resumo</h2>

                <Summary>
                  <div>
                    <h2>{cartQuantity} Jogos</h2>
                    <section>
                      <strong>Total</strong>
                      <span>{formatted.format(totalPrice)}</span>
                    </section>
                  </div>
                  <select>
                    {cartGames.map(game => (
                      <option value="games">{game.name}</option>
                    ))}
                  </select>
                </Summary>


                <Payment action="">
                  <h2>Pagamento</h2>
                  <Input type="text" text="Número da conta" />
                  <Input type="text" text="Nome no cartão" />
                  <div>
                    <Input type="text" text="Data de válidade" />
                    <Input type="text" text="CVC" />
                  </div>
                </Payment>

                <Button />
              </CheckoutContent>
            </>
        }

    </CheckoutShopping>
    </CheckoutShoppingContainer>
   
  )
}