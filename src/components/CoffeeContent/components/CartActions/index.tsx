import { CartActionsContainer } from "./styled";
import { ShoppingCart } from "@phosphor-icons/react";

export function CartActions() {
  return (
    <CartActionsContainer>
      <div className="price">
        <span>R$</span> <span>9,90</span>
      </div>
      <div className="actions">
        <div className="add-and-remove">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button className="add-cart">
          <ShoppingCart size={16} weight="fill" />
        </button>
      </div>
    </CartActionsContainer>
  );
}
