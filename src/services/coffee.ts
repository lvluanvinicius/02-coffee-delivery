import axios from "axios";

export const coffeeService = axios.create({
  baseURL: "http://localhost:3334",
});

export async function getCoffees() {
  const response = await coffeeService.get("coffes?_order=desc&_sort=title");

  return response.data && response.data;
}
