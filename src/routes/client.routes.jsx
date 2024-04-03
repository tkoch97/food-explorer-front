import { Route, Routes} from "react-router-dom";

import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { SearchDishes } from "../pages/Search";

export function ClientRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dish-details/:id" element={<DishDetails/>}/>
      <Route path="/dish-search" element={<SearchDishes/>}/>
    </Routes>
  )
}