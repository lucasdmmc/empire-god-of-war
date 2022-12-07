import { StyledButton } from "../../../../components/Button/styles";
import { Input } from "../Input";
import { PaymentContainer } from "./styles";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const paymentFormSchema = z.object({
  accountNumber: z.number(),
  ownerName: z.string(),
  expirationDate: z.number(),
  printedCode: z.number()
})

type PaymentFormInputs = z.infer<typeof paymentFormSchema>

export function Payment() {
  const { register, handleSubmit } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema)
  })

  function handlePayGames(data: PaymentFormInputs) {
    console.log(data)
  }

  return (
    <PaymentContainer onSubmit={handleSubmit(handlePayGames)}>
      <h2>Pagamento</h2>
      <Input 
        type="number"
        text="Número da conta"
        required
        {...register("accountNumber", { valueAsNumber: true })}
        />
      <Input 
        type="text"
        text="Nome no cartão"
        required
        {...register("ownerName")}
        />
      <div>
        <Input 
          type="number"
          text="Data de válidade"
          required
          {...register("expirationDate", { valueAsNumber: true })}
          />
        <Input 
          type="number"
          text="CVC"
          required
          {...register("printedCode", { valueAsNumber: true })}
          />
      </div>
      <StyledButton type="submit" variant="zinc" text="regular">
        Finalizar Compra
      </StyledButton>
    </PaymentContainer>
  )
}