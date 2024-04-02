import PropTypes from 'prop-types';
import { api } from "../services/api";

export function PostANewDishToDB(props) {

  const informationsToSendToApi = props;
  const formData = new FormData();

  const dishTextInformations = {
    name: informationsToSendToApi.name,
    description: informationsToSendToApi.description,
    category: informationsToSendToApi.category,
    ingredients: informationsToSendToApi.ingredients,
    price: informationsToSendToApi.price
  }
  
  formData.append("text", JSON.stringify(dishTextInformations))
  formData.append("dishImg", informationsToSendToApi.image)

  async function postNewDish() {
    try{
      await api.post("/dish", formData, {withCredentials:true});
      alert('Prato adicionado com sucesso');
    } catch (error) {
      if(error.response) {
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