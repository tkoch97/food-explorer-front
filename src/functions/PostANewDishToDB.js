import PropTypes from 'prop-types';
import { api } from "../services/api";

export function PostANewDishToDB(informationsToCreateANewDish, navigate, executeSignOut) {

  const formData = new FormData();

  const dishTextInformations = {
    name: informationsToCreateANewDish.name,
    description: informationsToCreateANewDish.description,
    category: informationsToCreateANewDish.category,
    ingredients: informationsToCreateANewDish.ingredients,
    price: informationsToCreateANewDish.price
  }
  
  formData.append("text", JSON.stringify(dishTextInformations))
  formData.append("dishImg", informationsToCreateANewDish.image)

  async function postNewDish() {
    try{
      await api.post("/dish", formData, {withCredentials:true});
      alert('Prato adicionado com sucesso');
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
  
  postNewDish();
}

PostANewDishToDB.PropTypes = {
  data: PropTypes.object,
}