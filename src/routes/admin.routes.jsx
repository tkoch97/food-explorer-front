import { Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { CreateDish } from "../pages/CreateDish";

export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dish-details/:id" element={<DishDetails/>}/>
      <Route path="/dish-create/" element={<CreateDish/>}/>
    </Routes>
  )
}