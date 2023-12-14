import PropTypes from 'prop-types';
import {Button} from "../Button/index";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/authContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { IoIosRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import maskGroup from "../../assets/Mask-group.png";
import { 
  Container, 
  FavoriteOrEditButton,
  DishImg,
  DishTitle,
  DishDrescription,
  DishPrice,
  DishBuy
} from "./style";
import { useMediaQuery } from "react-responsive";

export function DishCard(props) {
  const {img = maskGroup, title = "nome do prato", description="descrição do prato", price="25,90"} = props;
  const {user} = useAuth();

  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return(
    <Container>

      <FavoriteOrEditButton>
        {isAdmin ? <PiPencilSimple/> : <FaRegHeart />}
      </FavoriteOrEditButton>

      <DishImg>
        <img src={img} alt={`Foto de ${title}`}/>
      </DishImg>

      <DishTitle fontApplied= {isDesktop ? "POPPINS_300_BOLD" : "POPPINS_100_MEDIUM"}>
        {`${title} >`}
      </DishTitle>

      {isDesktop && (
        <DishDrescription fontApplied= "ROBOTO_SMALLER_REGULAR">
          {description}
        </DishDrescription>
      )}

      <DishPrice fontApplied= {isDesktop ? "ROBOTO_BIGGEST_REGULAR" : "ROBOTO_SMALL_REGULAR"}>
        {`R$ ${price}`}
      </DishPrice>

      {!isAdmin && (
        <DishBuy className="buySpace" fontApplied= {isDesktop ? "ROBOTO_BIG_BOLD" : "ROBOTO_SMALL_REGULAR"}>
          <div className="count" >
            <IoIosRemove/>
            <p>00</p>
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

DishCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};