import { Trash } from "@phosphor-icons/react";
import { useForm, FormProvider } from "react-hook-form";
import { CartPaymentData } from "./components/CartPaymentData";
import {
  CartContentArea,
  CartContentContainer,
  CartResumeContainer,
  ConfirmCheckout,
  ProductCartListContainer,
  RemoveFromCartContainer,
} from "./styled";

import imageCoffe from "../../assets/coffes/Coffee-01.png";
import { CoffeeRenderImages } from "../CoffeeRenderImages";
import { ActionAddProducts } from "../ActionAddProducts";
import { useContext, useEffect, useState } from "react";
import { CartCoffesContext } from "../../context/cart.context";

export function CartContent() {
  const methods = useForm();

  function confirmOrder(data: any) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <CartContentContainer>
        <CartContentArea onSubmit={methods.handleSubmit(confirmOrder)}>
          <div className="payment-data">
            <h1>Complete seu pedido</h1>

            <CartPaymentData />
          </div>
          <div className="cart-resume">
            <h1>Cafés selecionados</h1>

            <CartResume />
          </div>
        </CartContentArea>
      </CartContentContainer>
    </FormProvider>
  );
}

export function CartResume() {
  const { cartSelectedProducts } = useContext(CartCoffesContext);

  const [totalItens, setTotalItens] = useState(5);

  useEffect(() => {
    if (cartSelectedProducts.length > 0) {
      cartSelectedProducts.map((item) => {
        const total = item.price * item.quantity;
        setTotalItens((state) => state + total);
      });
    }
  }, [cartSelectedProducts]);

  return (
    <CartResumeContainer>
      {cartSelectedProducts.map((coffe) => {
        return (
          <div key={coffe.id}>
            <ProductCartList
              title="Expresso Tradicional"
              price={coffe.price}
              quantity={coffe.quantity}
            />
            <div className="divider">
              <hr />
            </div>
          </div>
        );
      })}

      <div className="divider">
        <hr />
      </div>

      <div className="price-resume">
        <div className="total-items">
          <span>Total de itens</span>
          <span>
            {totalItens.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>
        <div className="freight">
          <span>Entrega</span>
          <span>
          {(5).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>
            {totalItens.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>
        <div>
          <ConfirmCheckout>confirmar pedido</ConfirmCheckout>
        </div>
      </div>
    </CartResumeContainer>
  );
}

interface ProductCartListProps {
  title: string;
  price: number;
  quantity: number;
}

export function ProductCartList({
  title,
  price,
  quantity,
}: ProductCartListProps) {
  return (
    <ProductCartListContainer>
      <CoffeeRenderImages image={imageCoffe} />
      <div className="content">
        <div className="title">
          <span>{title}</span>
          <span>
            {(price * quantity).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>

        <div className="action">
          <ActionAddProducts quantity={quantity} handleQuantity={console.log} />
          <RemoveFromCart />
        </div>
      </div>
    </ProductCartListContainer>
  );
}

export function RemoveFromCart() {
  return (
    <RemoveFromCartContainer>
      <Trash size={18} />
      <span>Remover</span>
    </RemoveFromCartContainer>
  );
}
