import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../../components/Button/styles";
import { Input } from "../Input";
import { PaymentContainer } from "./styles";

export function Payment() {

  const [cpf, setCpf] = useState("")
  
  return (
    <PaymentContainer >
      <h2>Pagamento</h2>

        <Input 
          mask="9999 9999 9999 9999"
          type={"text"} 
          text={"Numero do cartão"} 
        />
        <Input 
          mask=""
          type={""} 
          text={"Nome no cartão"} 
        />
      <div>
        <Input 
          mask="99/99"
          type={""} 
          text={"Data de Validade"} 
        />
        <Input 
          mask="999"
          type={""} 
          text={"CVC"} 
        />
      </div>

      <Link to="/success">
        <StyledButton type="button" variant="red" text="regular">
          Finalizar Compra
        </StyledButton>
      </Link>
    </PaymentContainer>
  )
}