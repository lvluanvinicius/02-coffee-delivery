import * as RadioGroup from "@radix-ui/react-radio-group";
import { FormEvent } from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { CartPaymentDataContainer, CartPaymentDataContent } from "./styled";
import { getAddress } from "../../../../services/viacep";

export function CartPaymentData() {
  const { register, control } = useFormContext();

  async function handleAddress(event: FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
      const { value } = event.currentTarget;
      const response =
        value &&
        event.currentTarget.value.length >= 8 &&
        (await getAddress(value));

      console.log(response);
    }
  }

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
              <input
                type="text"
                placeholder="CEP"
                {...register("cep")}
                onChange={handleAddress}
              />
            </div>

            <div className="form-group public-place">
              <input
                type="text"
                placeholder="Rua"
                {...register("public_place")}
              />
            </div>

            <div className="form-group number-complement">
              <input
                type="text"
                placeholder="Número"
                className="number"
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                className="complement"
                {...register("complement")}
              />
            </div>

            <div className="form-group location">
              <input
                type="text"
                placeholder="Bairro"
                className="district"
                {...register("district")}
              />
              <input
                type="text"
                placeholder="City"
                className="city"
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                className="state"
                {...register("state")}
              />
            </div>
          </div>
        </div>

        <div className="method-pay">
          <div className="title">
            <span>
              <CurrencyDollar size={26} />
            </span>
            <div className="method-pay-description">
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <Controller
            control={control}
            name="type_payment"
            render={({ field }) => (
              <RadioGroup.Root
                className="content-form"
                onValueChange={field.onChange}
                value={field.value}
              >
                <RadioGroup.Item className="card-selector" value="card-credt">
                  <CreditCard size={24} />
                  <span>Cartão de crédito</span>
                </RadioGroup.Item>

                <RadioGroup.Item className="card-selector" value="card-debit">
                  <Bank size={24} />
                  <span>Cartão de débito</span>
                </RadioGroup.Item>

                <RadioGroup.Item className="card-selector" value="money">
                  <Money size={24} />
                  <span>Dinheiro</span>
                </RadioGroup.Item>
              </RadioGroup.Root>
            )}
          />
        </div>
      </CartPaymentDataContent>
    </CartPaymentDataContainer>
  );
}
