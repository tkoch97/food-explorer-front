import { api } from "../services/api";

export async function GetDishes(setDishes, executeSignOut) {

  try {
    const response = await api.get(`/dish`, { withCredentials: true });
    setDishes(response.data);
  } catch (error) {
    if (error.response.data.message === 'token inexistente') {
      alert('Token inexistente, favor fazer login novamente.');
      executeSignOut();
    }
  }
}
