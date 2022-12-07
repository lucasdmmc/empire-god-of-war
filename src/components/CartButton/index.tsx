import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { StyledCartButton } from "./styles";

interface CartButtonProps {
  quantity?: number
}

export function CartButton({ quantity }: CartButtonProps) {
  return (
    <Link to="/checkout">
      <StyledCartButton>
        <ShoppingCart size={20}/>
        { quantity && <span>{quantity}</span>}
      </StyledCartButton>
    </Link>
  )
}