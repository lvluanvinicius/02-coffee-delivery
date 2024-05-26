import { ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/logo.png";
import {
  HeaderContainer,
  HeaderContent,
  Menu,
  Cart,
  CountProducts,
} from "./styled";
import { useContext } from "react";
import { LocationCity } from "../LocationCity/index";
import { Link } from "react-router-dom";
import { CartCoffesContext } from "../../context/cart.context";

export function Header() {
  const { cartSelectedProducts } = useContext(CartCoffesContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>

        <Menu>
          <LocationCity />

          <Cart to={`cart`}>
            <ShoppingCart size={22} weight="fill" />
            <CountProducts>{cartSelectedProducts.length}</CountProducts>
          </Cart>
        </Menu>
      </HeaderContent>
    </HeaderContainer>
  );
}
