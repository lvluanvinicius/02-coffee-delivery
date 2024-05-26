import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeContext } from "../../context/coffee.context";
import {
  CoffeeContentArea,
  CoffeeContentContainer,
  CoffeeListContent,
} from "./styled";
import { useContext } from "react";

export function CoffeeContent() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <CoffeeContentContainer>
      <CoffeeContentArea>
        <h1>Nossos cafés</h1>
        <CoffeeListContent>
          {coffees &&
            coffees.map((coffee) => (
              <CoffeeItem key={coffee.id} coffee={coffee} />
            ))}
        </CoffeeListContent>
      </CoffeeContentArea>
    </CoffeeContentContainer>
  );
}
