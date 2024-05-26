import { Trash } from "@phosphor-icons/react";
import { useForm, FormProvider } from "react-hook-form";
import { CartPaymentData } from "./components/CartPaymentData";
import {
  CartContentArea,
  CartContentContainer,
  CartResumeContainer,
  ProductCartListContainer,
  RemoveFromCartContainer,
} from "./styled";

import imageCoffe from "../../assets/coffes/Coffee-01.png";
import { CoffeeRenderImages } from "../CoffeeRenderImages";
import { ActionAddProducts } from "../ActionAddProducts";

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
  return (
    <CartResumeContainer>
      <ProductCartList title="Expresso Tradicional" price={9.9} />
      <div className="divider">
        <hr />
      </div>
      <ProductCartList title="Latte" price={9.9} />
      <div className="divider">
        <hr />
      </div>
      <div className="price-resume">
        <div className="total-items">
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className="freight">
          <span>Entrega</span>
          <span>R$ 29,70</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </div>
    </CartResumeContainer>
  );
}

interface ProductCartListProps {
  title: string;
  price: number;
}

export function ProductCartList({ title }: ProductCartListProps) {
  return (
    <ProductCartListContainer>
      <CoffeeRenderImages image={imageCoffe} />
      <div className="content">
        <div className="title">
          <span>{title}</span>
          <span>R$ 9,99</span>
        </div>

        <div className="action">
          <ActionAddProducts className="action-cart" />
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
