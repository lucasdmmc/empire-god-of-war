import {  ArrowLeft, ShoppingCart, WindowsLogo, X } from "phosphor-react";
import { 
  ButtonCart, 
  CartGames,
  CartGamesContainer, 
  CheckoutContent, 
  CheckoutShopping, 
  CheckoutShoppingContainer, 
  Platform, 
  ShoppingCartContainer 
  } from "./styles";
import imaga1 from "../../../public/games/god-of-war-ragnarok.png"
import { Link } from "react-router-dom";
import { Input } from "./components/Input";



export function Checkout() {
  return (
    <CheckoutShoppingContainer>
      <CheckoutShopping data-aos="fade-left">
      <ShoppingCartContainer>
        <header>
          <h2>Meu carrinho</h2>
          <ButtonCart>
            <ShoppingCart size={20}/>
            <span>1</span>
          </ButtonCart>
        </header>
      
      
        <CartGamesContainer>
          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>

          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>

          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>
          
          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>

          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>
          
          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>

          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>

          <CartGames>
            <img src={imaga1} alt="" />
            <div>
              <strong>Jogo</strong>
              <span>God of War: Ragnarok</span>
            </div>
            <Platform>
              <span>Windows</span>
              <WindowsLogo size={20} weight="fill" />
            </Platform>
            <strong>R$ 250,00</strong>
            <button type="button"><X size={20}/></button>
          </CartGames>


        </CartGamesContainer>

        <footer>
          <Link to="/">
            <ArrowLeft size={20}/>
            <span>Voltar para página inicial</span>
          </Link>
        </footer>
      </ShoppingCartContainer>
      <CheckoutContent>
        <h2>Pagamento</h2>

        <form action="">
          <Input />
        </form>
      </CheckoutContent>
    </CheckoutShopping>
    </CheckoutShoppingContainer>
   
  )
}