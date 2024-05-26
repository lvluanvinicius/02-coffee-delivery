import { ReactNode, createContext, useEffect, useState } from "react";
import { getCoffees } from "../services/coffee";

interface CoffeeProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  price: number;
  image: string;
}

interface CartSelectedProducts extends CoffeeProps {
  quantity?: number;
}

interface CoffeeContextProps {
  coffees: CoffeeProps[];
  cartSelectedProducts: CoffeeProps[];
  selectProduct: (product: { id: number; quantity: number }) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextProps);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);

  const [cartSelectedProducts, setCartSelectedProducts] = useState<
    CartSelectedProducts[]
  >([]);

  async function loadCoffees() {
    const response = await getCoffees();
    setCoffees(response);
  }

  function selectProduct(product: { id: number; quantity: number }): void {
    let productItem = coffees.filter((coffee) => coffee.id === product.id);

    let validadeExists = cartSelectedProducts.filter(
      (cartProd) => cartProd.id === product.id,
    );

    if (validadeExists.length <= 1) {
      console.log("existe");

      return null;
    }

    console.log(validadeExists);
  }

  useEffect(() => {
    loadCoffees();
  }, []);

  return (
    <CoffeeContext.Provider
      value={{ coffees, selectProduct, cartSelectedProducts }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
