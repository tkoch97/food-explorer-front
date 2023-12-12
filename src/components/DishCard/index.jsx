import { 
  Container, 
  FavoriteOrEditButton,
  DishImg,
  DishTitle,
  DishDrescription,
  DishPrice,
  DishQuantity
} from "./style";
import {Button} from "../Button/index";
import { USER_ROLE } from "../../utils/roles";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/authContext";
import { FaRegHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";

export function DishCard(props) {
  const {img, title, description, price} = props;
  const {user} = useAuth();

  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return(
    <Container>
      <FavoriteOrEditButton>
        {isAdmin ? <PiPencilSimple/> : <FaRegHeart/>}
      </FavoriteOrEditButton>

    </Container>
  )
}