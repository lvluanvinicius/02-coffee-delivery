import { CoffeeRenderImagesContainer } from "./styled";

interface CoffeeRenderImagesProps {
  image: string;
}

export function CoffeeRenderImages({ image }: CoffeeRenderImagesProps) {
  return (
    <>
      <CoffeeRenderImagesContainer src={image} />
    </>
  );
}
