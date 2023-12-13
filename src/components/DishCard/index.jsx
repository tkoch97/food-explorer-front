import { 
  Container, 
  FavoriteOrEditButton,
  DishImg,
  DishTitle,
  DishDrescription,
  DishPrice,
  DishBuy
} from "./style";
import {Button} from "../Button/index";
import { USER_ROLE } from "../../utils/roles";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/authContext";
import { FaRegHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { IoIosRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import maskGroup from "../../assets/Mask-group.png";

export function DishCard(props) {
  const {img = maskGroup, title = "nome do prato", description="descrição do prato", price="25,90"} = props;
  const {user} = useAuth();

  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return(
    <Container>

      <FavoriteOrEditButton>
        {isAdmin ? <PiPencilSimple/> : <FaRegHeart/>}
      </FavoriteOrEditButton>

      <DishImg>
        <img src={img} alt={`Foto de ${title}`}/>
      </DishImg>

      <DishTitle>
        {title}
      </DishTitle>

      {!isAdmin && (
        <DishDrescription>
          {description}
        </DishDrescription>
      )}

      <DishPrice>
        {`R$ ${price}`}
      </DishPrice>

      {!isAdmin && (
        <DishBuy className="buySpace">
          <div className="count">
            <IoIosRemove/>
            00
            <IoAddOutline/>
          </div>
          <div className="includeButton">
            <Button title="Incluir"/>
          </div>
        </DishBuy>
      )}

    </Container>
  )
}