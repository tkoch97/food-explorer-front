import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
// import { AdminRoutes } from "./admin.routes";
// import { ClientRoutes } from "./client.routes";

export function Routes() {
  return(
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  )
}