import { createContext, useContext } from "react";
import PropTypes from 'prop-types';


const AuthContext = createContext({});

function AuthProvider({children}) {
  return(
    <AuthContext.Provider value={{nome: "Thiago", email: "tkoch.gim@gmail.com"}}>
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