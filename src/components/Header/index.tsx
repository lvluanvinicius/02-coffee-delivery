import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/logo.png";
import {
  HeaderContainer,
  HeaderContent,
  Menu,
  LocationCity,
  Cart,
  CountProducts,
} from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Menu>
          <LocationCity>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </LocationCity>

          <Cart>
            <ShoppingCart size={22} weight="fill" />
            <CountProducts>3</CountProducts>
          </Cart>
        </Menu>
      </HeaderContent>
    </HeaderContainer>
  );
}
