import { api } from "../services/api";

export async function FetchDish(props) {

  const informationsToFetchDish = props;

  try {
    const response = await api.get(`/dish/${informationsToFetchDish.params.id}`, {withCredentials:true});
    informationsToFetchDish.setDishData(response.data);
  } catch (error) {
    if (error.response && error.response.data.message === 'token inexistente') {
      alert('Token inexistente, favor fazer login novamente.');
      informationsToFetchDish.executeSignOut();
    }
  }
}
