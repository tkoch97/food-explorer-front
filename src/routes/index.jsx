import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/authContext";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { ClientRoutes } from "./client.routes";

export function Routes() {

  const {user} = useAuth();

  function AccessRoute() {
    switch(user.role) {

      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
      case USER_ROLE.CLIENT:
        return <ClientRoutes/>
      default:
        return <AuthRoutes/>
    }
  }
  
  return(
    <BrowserRouter>
      {user ? <AccessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}