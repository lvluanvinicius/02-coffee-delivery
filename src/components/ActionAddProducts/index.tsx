import { ActionAddProductsContainer } from "./styled";

interface ActionAddProductsProps {
  quantity: number;
  handleQuantity: (action: string) => void;
}

export function ActionAddProducts({
  quantity,
  handleQuantity,
}: ActionAddProductsProps) {
  return (
    <ActionAddProductsContainer className="action-cart">
      <button onClick={() => handleQuantity("decrement")}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantity("increment")}>+</button>
    </ActionAddProductsContainer>
  );
}
