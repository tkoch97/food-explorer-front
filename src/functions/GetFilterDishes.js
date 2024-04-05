import { api } from "../services/api";

export function GetFilterDishes(props) {

  const {nameOrIngredient, setDishes, navigate, executeSignOut} = props

  async function GetDishesInDB() {
    try{
      const response = await api.get(`/dish?nameOrIngredient=${nameOrIngredient}`, {withCredentials:true})
      console.log('resposta das refeições em GetDishInDB =>', response.data)
      setDishes(response.data);
    } catch(error) {

      if (error.response.data.message === 'token inexistente') {
        alert('Token inexistente, favor fazer login novamente.');
        executeSignOut();
      }
      
      alert(error.response.data.message)
      navigate('/')
    }
  }

  GetDishesInDB();
}