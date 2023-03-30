import { api } from "./api";

export async function getProdutos() {
  try {
    const { data } = await api.get("/products")
    return(data);
  } catch (error) {
    console.error(error);
  }
}

