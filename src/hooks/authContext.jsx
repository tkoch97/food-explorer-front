import PropTypes from 'prop-types';
import { api } from "../services/api";
import { createContext, useContext, useState } from "react";


const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});

  async function SignIn({email, password}) {

    try {
      const response = await api.post('/sessions', { email, password }, {withCredentials:true});

      const {getUserByEmail} = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(getUserByEmail))

      setData({getUserByEmail});

      console.log("User info ->", getUserByEmail)
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