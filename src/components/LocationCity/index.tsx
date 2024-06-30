import { MapPin } from "@phosphor-icons/react";
import {
  LocationCityContainer,
  LocationCityTrigger,
  LocationCityContent,
  LocationCityOverlay,
  LocationCityTitle,
  LocationCityInput,
  LocationCityForm,
  LocationCityConfirm,
  LocationCityMessage,
} from "./styled";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getAddress } from "../../services/viacep";
import { ClientAddresses, CoffeeContext } from "../../context/coffee.context";

export function LocationCity() {
  const { handleSetAddressClient, address } = useContext(CoffeeContext);

  const [open, setOpen] = useState(false);
  const { handleSubmit, register, formState } = useForm<{
    cep: string;
  }>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSavePostalCode(data: { cep: string }) {
    try {
      if (!data.cep) throw new Error("Por favor, informe seu cep.");

      if (!data.cep.match("^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]"))
        throw new Error(
          "Formato de cep inválido ou não informado.\nSiga o exemplo: 12345-678",
        );

      const response = await getAddress(data.cep);

      if (response.data) {
        if (response.data.erro) {
          throw new Error("CEP informado é inválido.");
        } else {
          handleSetAddressClient(response.data as ClientAddresses);
          setOpen(!open);
        }
      }
    } catch (err) {
      if (err instanceof Error) setErrorMessage(err.message);
    }
  }

  return (
    <LocationCityContainer open={open} onOpenChange={setOpen}>
      <LocationCityTrigger>
        <MapPin size={22} weight="fill" />
        {address ? `${address.localidade}, ${address.uf}` : "Buscar..."}
      </LocationCityTrigger>

      <Dialog.Portal>
        <LocationCityOverlay />
        <LocationCityContent>
          <LocationCityTitle>Informe seu CEP</LocationCityTitle>
          <LocationCityForm onSubmit={handleSubmit(handleSavePostalCode)}>
            <LocationCityInput
              {...register("cep", { required: "Cep é obrigatório." })}
              placeholder="Informe o cep..."
              onInput={() => setErrorMessage(null)}
            />
            <LocationCityConfirm type="submit">Buscar</LocationCityConfirm>
            {formState.errors.cep || errorMessage ? (
              <LocationCityMessage>
                <span>
                  {errorMessage
                    ? errorMessage
                    : formState.errors.cep
                      ? formState.errors.cep.message
                      : ""}
                </span>
              </LocationCityMessage>
            ) : (
              ""
            )}
          </LocationCityForm>
        </LocationCityContent>
      </Dialog.Portal>
    </LocationCityContainer>
  );
}
