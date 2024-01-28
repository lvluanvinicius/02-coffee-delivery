import { CartActions } from "../CartActions";
import { CoffeeRenderImages } from "../CoffeeRenderImages";
import { TagCoffeeType } from "../TagCoffeeType";
import { CoffeItemContainer } from "./styled";

import CoffeeImage from "../../../../assets/coffes/Coffee-01.png";

export function CoffeeItem() {
  return (
    <CoffeItemContainer>
      <div className="content">
        <CoffeeRenderImages image={CoffeeImage} />
        <TagCoffeeType text="Tradicional" />
        <h1 className="title">Expresso Tradicional</h1>
        <p className="description">
          O tradicional café feito com água quente e grãos moídos
        </p>
        <CartActions />
      </div>
    </CoffeItemContainer>
  );
}
