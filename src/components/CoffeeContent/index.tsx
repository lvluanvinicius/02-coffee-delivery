import { CoffeeItem } from "./components/CoffeeItem";
import {
  CoffeeContentArea,
  CoffeeContentContainer,
  CoffeeListContent,
} from "./styled";

export function CoffeeContent() {
  return (
    <CoffeeContentContainer>
      <CoffeeContentArea>
        <h1>Nossos cafés</h1>
        <CoffeeListContent>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeeListContent>
      </CoffeeContentArea>
    </CoffeeContentContainer>
  );
}
