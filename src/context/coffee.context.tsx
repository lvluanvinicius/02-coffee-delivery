import { ReactNode, createContext, useEffect, useState } from "react";
import { getCoffees } from "../services/coffee";

export interface CoffeeProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  price: number;
  image: string;
}

export interface ClientAddresses {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  number?: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface CoffeeContextProps {
  coffees: CoffeeProps[];
  address: ClientAddresses | null;
  handleSetAddressClient: (address: ClientAddresses) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextProps);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);

  const [address, setAddress] = useState<ClientAddresses | null>(function () {
    const add = localStorage.getItem("@pizzashop:location-client");
    if (add) return JSON.parse(add);
    return null;
  });

  async function loadCoffees() {
    const response = await getCoffees();
    setCoffees(response);
  }

  function handleSetAddressClient(address: ClientAddresses) {
    localStorage.removeItem("@pizzashop:location-client");
    localStorage.setItem("@pizzashop:location-client", JSON.stringify(address));
    if (!address) setAddress(null);
    setAddress(address);
  }

  useEffect(() => {
    loadCoffees();
  }, []);

  return (
    <CoffeeContext.Provider
      value={{
        address,
        coffees,
        handleSetAddressClient,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
