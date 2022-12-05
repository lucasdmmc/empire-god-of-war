import { InputContainer } from "./styles";

export function Input() {
  return (
    <InputContainer>
      <input type="text" placeholder="" required/>
      <span>E-mail</span>
    </InputContainer>
  )
}