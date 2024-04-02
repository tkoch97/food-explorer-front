import { api } from "../services/api";

export function DeleteDishFromDB(informationsToEditDish, navigate) {
  
  async function DeleteDish() {
    try{
      await api.delete(`/dish/${informationsToEditDish.dishId}`, {withCredentials:true});
      alert('Prato deletado com sucesso');
      navigate('/')
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível concluir a solicitação. Por favor, tente mais tarde.')
      }
    }
  }
  
  DeleteDish();
}