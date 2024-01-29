import { ActionAddProductsContainer } from "./styled";

export function ActionAddProducts({ ...props }) {
  return (
    <ActionAddProductsContainer {...props}>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </ActionAddProductsContainer>
  );
}
