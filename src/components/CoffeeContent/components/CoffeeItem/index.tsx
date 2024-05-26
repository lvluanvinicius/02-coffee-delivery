import { CartActions } from "../CartActions";
import { CoffeeRenderImages } from "../../../CoffeeRenderImages";
import { TagCoffeeType } from "../TagCoffeeType";
import { CoffeItemContainer } from "./styled";

import CoffeeImage from "../../../../assets/coffes/Coffee-01.png";
interface CoffeeProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  price: number;
  image: string;
}

interface CoffeeItemProps {
  coffee: CoffeeProps;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <CoffeItemContainer>
      <div className="content">
        <CoffeeRenderImages image={CoffeeImage} />
        <TagCoffeeType text="Tradicional" />
        <h1 className="title">{coffee.title}</h1>
        <p className="description">{coffee.description}</p>
        <CartActions coffeeid={coffee.id} price={coffee.price} />
      </div>
    </CoffeItemContainer>
  );
}
