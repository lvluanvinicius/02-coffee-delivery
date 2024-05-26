import axios from "axios";

export const viacep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export async function getAddress(cep: string) {
  const response = await viacep.get(`${cep}/json/`);

  return response;
}
