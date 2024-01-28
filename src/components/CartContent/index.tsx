import { CreditCard, CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import {
  CartContentArea,
  CartContentContainer,
  CartPaymentDataContainer,
  CartPaymentDataContent,
} from "./styled";

export function CartContent() {
  return (
    <CartContentContainer>
      <CartContentArea>
        <div className="payment-data">
          <h1>Complete seu pedido</h1>

          <CartPaymentData />
        </div>
        <div className="cart-resume">
          <h1>Cafés selecionados</h1>
        </div>
      </CartContentArea>
    </CartContentContainer>
  );
}

export function CartPaymentData() {
  return (
    <CartPaymentDataContainer>
      <CartPaymentDataContent>
        <div className="address">
          <div className="address-title">
            <span>
              <MapPinLine size={26} />
            </span>
            <div className="address-description">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="form-address">
            <div className="form-group cep">
              <input type="text" placeholder="CEP" />
            </div>

            <div className="form-group public-place">
              <input type="text" placeholder="Rua" />
            </div>

            <div className="form-group number-complement">
              <input type="text" placeholder="Número" className="number" />
              <input
                type="text"
                placeholder="Complemento"
                className="complement"
              />
            </div>

            <div className="form-group location">
              <input type="text" placeholder="Bairro" className="district" />
              <input type="text" placeholder="City" className="city" />
              <input type="text" placeholder="UF" className="state" />
            </div>
          </div>
        </div>

        <div className="method-pay">
          <div className="title">
            <span>
              <CurrencyDollar size={26} />
            </span>
            <div className="method-pay-description">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="content-form">
            <div className="card-selector">
              <CreditCard size={24} />
              <span>Cartão de crédito</span>
            </div>

            <div className="card-selector">
              <CreditCard size={24} />
              <span>Cartão de débito</span>
            </div>

            <div className="card-selector">
              <CreditCard size={24} />
              <span>Dinheiro</span>
            </div>
          </div>
        </div>
      </CartPaymentDataContent>
    </CartPaymentDataContainer>
  );
}
