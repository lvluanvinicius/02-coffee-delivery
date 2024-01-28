import {
  CartIcon,
  CoffeeShowContainer,
  CoffeeShowContent,
  Description,
} from "./styled";

import CoffeeImageShow from "../../assets/coffee-show.png";
import BackgroundIntro from "../../assets/Background.png";
import { Package, ShoppingCart, Timer, Coffee } from "@phosphor-icons/react";
import { ReactNode } from "react";

export function CoffeeShow() {
  return (
    <CoffeeShowContainer bg={BackgroundIntro}>
      <CoffeeShowContent>
        <Description>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="actions">
            <CardIcon
              icon={<ShoppingCart size={16} weight="fill" />}
              message="Compra simples e segura"
              variant="cart"
            />
            <CardIcon
              icon={<Package size={16} weight="fill" />}
              message="Embalagem mantém o café intacto"
              variant="package"
            />
            <CardIcon
              icon={<Timer size={16} weight="fill" />}
              message="Entrega rápida e rastreada"
              variant="time"
            />
            <CardIcon
              icon={<Coffee size={16} weight="fill" />}
              message="O café chega fresquinho até você"
              variant="coffe"
            />
          </div>
        </Description>
        <img src={CoffeeImageShow} />
      </CoffeeShowContent>
    </CoffeeShowContainer>
  );
}

interface CardIconProps {
  message: string;
  variant: string;
  icon: ReactNode;
}

function CardIcon({ message, variant, icon }: CardIconProps) {
  return (
    <CartIcon variant={variant}>
      <span>{icon}</span>
      <span>{message}</span>
    </CartIcon>
  );
}
