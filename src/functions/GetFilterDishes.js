import { api } from "../services/api";

export function GetFilterDishes(props) {

  const {nameOrIngredient, setDishes, navigate} = props

  async function GetDishesInDB() {
    try{
      const response = await api.get(`/dish?nameOrIngredient=${nameOrIngredient}`, {withCredentials:true})
      setDishes(response.data);
    } catch(error) {
      alert(error.response.data.message)
      navigate('/home')
    }
  }

  GetDishesInDB();
}