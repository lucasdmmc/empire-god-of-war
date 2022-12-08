import { InputHTMLAttributes, ReactNode } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <InputContainer>
      {icon}
      <input {...rest} />
    </InputContainer>
  )
}