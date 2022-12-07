import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <StyledButton variant="red" {...rest}>
      {title}
    </StyledButton>
      
  )
}