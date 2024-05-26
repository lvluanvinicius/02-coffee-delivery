import { useContext, useState } from "react";
import { ActionAddProducts } from "../../../ActionAddProducts";
import { CartActionsContainer } from "./styled";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartCoffesContext } from "../../../../context/cart.context";

interface CartActionsProps {
  coffeeid: number;
  price: number;
}

export function CartActions({ coffeeid, price }: CartActionsProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const { selectProduct } = useContext(CartCoffesContext);

  function handleQuantity(action: string) {
    if (action === "increment")
      setQuantity((state) => {
        return state + 1;
      });

    if (action === "decrement")
      setQuantity((state) => {
        if (state === 1) return state;
        return state - 1;
      });
  }

  function handleSetProduct() {
    if (quantity <= 0) {
      return null;
    }

    selectProduct({ id: coffeeid, quantity });
  }

  return (
    <CartActionsContainer>
      <div className="price">
        <span>R$</span> <span>{price}</span>
      </div>
      <div className="actions">
        <ActionAddProducts
          handleQuantity={handleQuantity}
          quantity={quantity}
        />
        <button className="add-cart" onClick={handleSetProduct}>
          <ShoppingCart size={16} weight="fill" />
        </button>
      </div>
    </CartActionsContainer>
  );
}
