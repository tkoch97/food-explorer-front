import { api } from "../services/api";

export async function GetDishes(setDishes) {
  const response = await api.get(`/dish`, {withCredentials:true});
  setDishes(response.data)
}