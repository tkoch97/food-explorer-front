import PropTypes from 'prop-types';
import {Button} from "../Button/index";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/authContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
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
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Accountant } from '../Accountant';

export function DishCard(props) {
  const {data} = props;
  const {user} = useAuth();

  const dishImage = `
  ${api.defaults.baseURL}/files/${data.image}`;

  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  return(
    <Container>

      <FavoriteOrEditButton>
        {isAdmin ? <PiPencilSimple/> : <FaRegHeart />}
      </FavoriteOrEditButton>

      <DishImg onClick={() => navigate(`/dish-details/${data.id}`)}>
        <img src={dishImage} alt={`Foto de ${data.title}`}/>
      </DishImg >

      <DishTitle 
        onClick={() => navigate(`/dish-details/${data.id}`)} 
        fontApplied= {isDesktop ? "POPPINS_300_BOLD" : "POPPINS_100_MEDIUM"
      }>
        {`${data.name} >`}
      </DishTitle>

      {isDesktop && (
        <DishDrescription fontApplied= "ROBOTO_SMALLER_REGULAR">
          {data.description}
        </DishDrescription>
      )}

      <DishPrice fontApplied= {isDesktop ? "ROBOTO_BIGGEST_REGULAR" : "ROBOTO_SMALL_REGULAR"}>
        {`R$ ${Number(data.price).toFixed(2).replace('.', ',')}`}
      </DishPrice>

      {!isAdmin && (
        <DishBuy className="buySpace" fontApplied= {isDesktop ? "ROBOTO_BIG_BOLD" : "ROBOTO_SMALL_REGULAR"}>
          <Accountant/>
          <div className="includeButton">
            <Button title="Incluir"/>
          </div>
        </DishBuy>
      )}

    </Container>
  )
}
DishCard.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
