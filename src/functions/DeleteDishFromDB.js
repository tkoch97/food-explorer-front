import { api } from "../services/api";

export function DeleteDishFromDB(informationsToEditDish, navigate, executeSignOut) {

  async function DeleteDish() {
    try{
      await api.delete(`/dish/${informationsToEditDish.dishId}`, {withCredentials:true});
      alert('Prato deletado com sucesso');
      navigate('/')
    } catch (error) {
      if(error.response) {
        if(error.response.data.message === 'Token inexistente') {
          alert('Token inexistente, favor fazer login novamente.');
          executeSignOut();
        }
        alert(error.response.data.message)
      } else {
        alert('Não foi possível concluir a solicitação. Por favor, tente mais tarde.')
      }
    }
  }
  
  DeleteDish();
}