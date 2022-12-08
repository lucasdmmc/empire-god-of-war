import { InputHTMLAttributes, ReactNode } from "react";
import { CardToPayContainer } from "./styles";

type CardToPayProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  title: string
}

export function CardToPay({ icon, title }: CardToPayProps) {
  return (
    <CardToPayContainer>
      {icon}
      {title}
    </CardToPayContainer>
  )
}