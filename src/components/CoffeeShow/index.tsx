import { CoffeeShowContainer, CoffeeShowContent, Description } from "./styled";

import Coffee from "../../assets/coffee-show.png";

export function CoffeeShow() {
  return (
    <CoffeeShowContainer>
      <CoffeeShowContent>
        <Description>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Description>
        <img src={Coffee} />
      </CoffeeShowContent>
    </CoffeeShowContainer>
  );
}
