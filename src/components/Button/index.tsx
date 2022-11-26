import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest}: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {title}
    </ButtonContainer>
  )
}