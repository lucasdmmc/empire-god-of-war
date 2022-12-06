import {  ArrowLeft, ShoppingCart, WindowsLogo, X } from "phosphor-react";
import { 
  Action,
  ButtonCart, 
  ButtonsContainer, 
  Cancel, 
  CartGames,
  CartGamesContainer, 
  CheckoutContent, 
  CheckoutShopping, 
  CheckoutShoppingContainer, 
  Content, 
  Overlay, 
  Payment, 
  Platform, 
  RemoveGame, 
  ShoppingCartContainer, 
  Summary
  } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { UseGames } from "../../hooks/UseGames";
import { priceFormatter } from "../../utils/FormatMoney";
import { EmpityCart } from "../../components/EmpityCart";
import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import { RemoveGamesModal } from "../../components/RemoveGamesModal";
import { ComponentProps } from "react";

type CheckoutProps = ComponentProps<typeof RemoveGame> 

export function Checkout({ ...rest }: CheckoutProps) {

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
                  
                    <AlertDialog.Root>
                      <AlertDialog.Trigger asChild>
                        <RemoveGame {...rest} type="button">
                          Remover
                        </RemoveGame>
                      </AlertDialog.Trigger>

                      <AlertDialog.Portal>
                        <Overlay />

                        <Content>

                          <AlertDialog.Title>
                            <strong>Tem certeza que deseja remover o jogo do carrinho?</strong>
                          </AlertDialog.Title>
                        
                        <ButtonsContainer>
                          <Cancel>
                            Cancelar
                          </Cancel>
                          <Action 
                            type="button" 
                            onClick={() => removeCartGame(game.id)}>
                            Remover
                          </Action>
                        </ButtonsContainer>
                        </Content>

                      </AlertDialog.Portal>
                    </AlertDialog.Root>

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