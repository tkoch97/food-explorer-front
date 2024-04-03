import { api } from "../services/api";

export function GetFilterDishes(props) {

  const {nameOrIngredient, setDishes, navigate} = props

  async function GetDishesInDB() {
    try{
      const response = await api.get(`/dish?nameOrIngredient=${nameOrIngredient}`, {withCredentials:true})
      console.log('resposta das refeições em GetDishInDB =>', response.data)
      setDishes(response.data);
    } catch(error) {
      console.log('alerta de erro dentro da função GetDishInDB =>', error.response.data.message)
      alert(error.response.data.message)
      navigate('/')
    }
  }

  GetDishesInDB();
}