import { TagCoffeeTypeContainer } from "./styled";

interface TagCoffeeTypeProps {
  text: string;
}

export function TagCoffeeType({ text }: TagCoffeeTypeProps) {
  return <TagCoffeeTypeContainer>{text}</TagCoffeeTypeContainer>;
}
