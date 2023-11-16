import { api } from "../services/api"

export function executeSignUp(name, email, password) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!name || !email || !password) {
    return alert("Por favor, preencha todos os campos")
  } else if(password.length < 6) {
    return alert("A sua senha tem que ter no mínimo 6 caracteres.")
  } else if (!emailPattern.test(email)) {
    return alert("Por favor, insira um endereço de e-mail válido.")
  }

  api.post("/user", {name, email, password})
  .then(() => {
    alert("Usuário cadastrado com sucesso")
  })
  .catch(error => {
    if(error.response) {
      alert(error.response.data.message);
    }else{
      alert("Não foi possível efetuar o cadastro. Por favor, tente mais tarde.")
    }
  })
}