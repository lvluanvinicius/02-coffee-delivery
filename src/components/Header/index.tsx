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
import { CoffeeContext } from "../../context/coffee.context";
import { useContext } from "react";

export function Header() {
  const { cartSelectedProducts } = useContext(CoffeeContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Menu>
          <LocationCity>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </LocationCity>

          <Cart to={`cart`}>
            <ShoppingCart size={22} weight="fill" />
            <CountProducts>{cartSelectedProducts.length}</CountProducts>
          </Cart>
        </Menu>
      </HeaderContent>
    </HeaderContainer>
  );
}
