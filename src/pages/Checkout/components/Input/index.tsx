import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  text: string;

}

export function Input({ type, text, ...rest }: InputProps) {
  return (
    <InputContainer {...rest}>
      <input type={type} placeholder="" required/>
      <span>{text}</span>
    </InputContainer>
  )
}