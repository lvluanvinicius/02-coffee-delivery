import { ActionAddProductsContainer } from "./styled";

interface ActionAddProductsProps {
  quantity: number;
  handleQuantity: (action: string) => void;
}

export function ActionAddProducts({
  quantity,
  handleQuantity,
  ...props
}: ActionAddProductsProps) {
  return (
    <ActionAddProductsContainer {...props}>
      <button onClick={() => handleQuantity("decrement")}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantity("increment")}>+</button>
    </ActionAddProductsContainer>
  );
}
