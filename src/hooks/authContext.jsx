import PropTypes from 'prop-types';
import { api } from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});

  async function SignIn({email, password}) {

    try {
      const response = await api.post('/sessions', { email, password }, {withCredentials:true});
      const { getUserByEmail } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(getUserByEmail))

      setData({getUserByEmail});

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login, tente mais tarde.")
      }
    }

  }

  function signOut() {
      localStorage.removeItem("@foodExplorer:user");
      setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user");
    console.log("valor de user em authContext ->", user)
    if(user) {
      setData({
        getUserByEmail: JSON.parse(user)
      });
    }
  }, []);

  return(
    <AuthContext.Provider value={{
      SignIn,
      signOut,
      user: data.getUserByEmail
      }}>
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