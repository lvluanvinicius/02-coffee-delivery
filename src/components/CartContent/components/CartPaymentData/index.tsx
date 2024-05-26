import * as RadioGroup from "@radix-ui/react-radio-group";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  CartPaymentDataContainer,
  CartPaymentDataContent,
  LocationCityMessage,
} from "./styled";
import { getAddress } from "../../../../services/viacep";
import {
  ClientAddresses,
  CoffeeContext,
} from "../../../../context/coffee.context";

interface CartPaymentDataSchema {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  number?: string;
  uf: string;
  type_payment: "card-credt" | "card-debit" | "money";
}

export function CartPaymentData() {
  const { handleSetAddressClient, address } = useContext(CoffeeContext);

  const { register, control, reset } = useForm<CartPaymentDataSchema>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleAddress(event: FormEvent<HTMLInputElement>) {
    try {
      if (event.currentTarget) {
        const { value } = event.currentTarget;

        // Valida se um valor foi informado.
        if (!value) throw new Error("Por favor, informe seu cep.");

        // Só segue para a execução da busca se o valor tiver mais que 8 caracteres.
        if (value.length <= 8) return null;

        // Valida o formato do CEP.
        if (!value.match("^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]"))
          throw new Error(
            "Formato de cep inválido ou não informado.\nSiga o exemplo: 12345-678",
          );

        // Efetua o envio da string para API.
        const response = await getAddress(value);

        if (response.data) {
          if (response.data.erro) {
            throw new Error("CEP informado é inválido.");
          } else {
            // Atualizando CEP no estado.
            handleSetAddressClient(response.data as ClientAddresses);
          }
        }
      }
    } catch (err) {
      if (err instanceof Error) setErrorMessage(err.message);
    }
  }

  useEffect(() => {
    address && reset(address);
  }, [address]);

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
                placeholder="CEP: 12345-678"
                {...register("cep")}
                onChange={handleAddress}
                onInput={() => setErrorMessage(null)}
              />
            </div>

            <div className="form-group public-place">
              <input
                type="text"
                placeholder="Rua"
                {...register("logradouro")}
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
                {...register("complemento")}
              />
            </div>

            <div className="form-group location">
              <input
                type="text"
                placeholder="Bairro"
                className="district"
                {...register("bairro")}
              />
              <input
                type="text"
                placeholder="City"
                className="city"
                {...register("localidade")}
              />
              <input
                type="text"
                placeholder="UF"
                className="state"
                {...register("uf")}
              />
            </div>

            {errorMessage && (
              <LocationCityMessage>
                <span>{errorMessage}</span>
              </LocationCityMessage>
            )}
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
            rules={{
              required: "Informe um meio de pagamento.",
            }}
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
