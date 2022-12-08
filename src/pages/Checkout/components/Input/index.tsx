import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";
import InputMask from "react-input-mask"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  text: string;
  mask: string;

}

export function Input({ mask, type, text, ...rest }: InputProps) {
  return (
    <InputContainer {...rest}>
      <InputMask mask={mask} type={type} placeholder="" required/>
      <span>{text}</span>
    </InputContainer>
  )
}