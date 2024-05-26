import { createContext, ReactNode, useContext, useState } from "react";
import { CoffeeContext, CoffeeProps } from "./coffee.context";

interface CartCoffesProviderProps {
  children: ReactNode;
}

interface CartSelectedProducts extends CoffeeProps {
  quantity: number;
}

interface CartCoffesContextProps {
  cartSelectedProducts: CartSelectedProducts[];
  selectProduct: (product: { id: number; quantity: number }) => void;
}

export const CartCoffesContext = createContext({} as CartCoffesContextProps);

export function CartCoffesProvider({ children }: CartCoffesProviderProps) {
  const { coffees } = useContext(CoffeeContext);

  const [cartSelectedProducts, setCartSelectedProducts] = useState<
    CartSelectedProducts[]
  >([]);

  function selectProduct(product: { id: number; quantity: number }): void {
    setCartSelectedProducts((state) => {
      const coff = coffees.find((coffe) => coffe.id === product.id);

      if (coff) {
        const selectedIndex = state.findIndex((st) => st.id === coff.id);

        if (selectedIndex === -1) {
          return [{ ...coff, quantity: product.quantity }, ...state];
        } else {
          state[selectedIndex].quantity += product.quantity;
        }
      }

      return state;
    });
  }

  return (
    <CartCoffesContext.Provider
      value={{
        selectProduct,
        cartSelectedProducts,
      }}
    >
      {children}
    </CartCoffesContext.Provider>
  );
}
