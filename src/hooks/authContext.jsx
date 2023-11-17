import PropTypes from 'prop-types';
import { api } from "../services/api";
import { createContext, useContext } from "react";


const AuthContext = createContext({});

function AuthProvider({children}) {

  async function SignIn({email, password}) {

    try {
      const response = await api.post('/sessions', { email, password });
      console.log("User info ->", response)
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login, tente mais tarde.")
      }
    }

  }

  return(
    <AuthContext.Provider value={{SignIn}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {AuthProvider, useAuth}