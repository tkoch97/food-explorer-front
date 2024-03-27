import { api } from "../services/api";

export function UpdateADishInDB(informationsToEditDish, navigate) {
  const formData = new FormData();

  const dishTextInformations = {
    name: informationsToEditDish.name,
    description: informationsToEditDish.description,
    category: informationsToEditDish.category,
    ingredients: informationsToEditDish.ingredients,
    price: informationsToEditDish.price
  }

  console.log("valor de informationsToEditDish =>", informationsToEditDish);
  console.log("valor de dishTextInformations =>", dishTextInformations);
  
  formData.append("text", JSON.stringify(dishTextInformations))
  if(informationsToEditDish.image) {
    formData.append("dishImg", informationsToEditDish.image)
  }
  
  async function EditDish() {
    try{
      await api.put(`/dish/${informationsToEditDish.dishId}`, formData, {withCredentials:true});
      alert('Prato editado com sucesso');
      navigate('/')
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível concluir a solicitação. Por favor, tente mais tarde.')
      }
    }
  }
  
  EditDish();
}