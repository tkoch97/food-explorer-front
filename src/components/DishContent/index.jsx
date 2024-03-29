
import { useAuth } from "../../hooks/authContext";
import { Container, DishImg, DishTitle, DishDescription } from './style.js'
import {PiReceipt} from "react-icons/pi";
import { USER_ROLE } from "../../utils/roles";
import { useMediaQuery } from "react-responsive";
import { api } from '../../services/api';
import PropTypes from 'prop-types';
import { IngredientTag } from '../IngredientTag/index.jsx';
import { Accountant } from '../Accountant/index.jsx';
import { Button } from '../Button/index.jsx';
import { useNavigate } from "react-router-dom";

export function DishContent(props) {
  const {user} = useAuth();
  const {data} = props;
  const navigate = useNavigate();

  const dishImage = `
  ${api.defaults.baseURL}/files/${data.dish.image}`;

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const desktopTitleOfIncludeButton = `Incluir • R$ ${Number(data.dish.price).toFixed(2).replace('.', ',')}`
  const mobileTitleOfIncludeButton = `Pedir • R$ ${Number(data.dish.price).toFixed(2).replace('.', ',')}`

  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  return (
    <Container>

      <main className='main'>
        
        <DishImg>
          <img src={dishImage} alt={`Imagem de ${data.dish.title}`} />
        </DishImg>

        <div className='dishInformations'>
          <DishTitle fontApplied= "POPPINS_500_MEDIUM">
            {data.dish.name}
          </DishTitle>

          <DishDescription fontApplied="POPPINS_300_REGULAR">
            {data.dish.description}
          </DishDescription>

          <div className='dishInformations_ingredients'>
            {data.ingredients.map(ingredient => (
              <IngredientTag key={ingredient.id} text={ingredient.name}/>
            ))}
          </div>

          <div className='AddTooCart'>
            {isAdmin ? null : <Accountant/>}
            <div className='includeButtonSpace'>
              {isAdmin ? 
                <Button title={"Editar prato"} onClick={() => navigate(`/dish-edit/${data.dish.id}`)}/> :
                <Button 
                title={ isDesktop ? desktopTitleOfIncludeButton : mobileTitleOfIncludeButton}
                icon={isDesktop ? null : PiReceipt }
                />
              }
            </div>
          </div>
        </div>

      </main>
      
    </Container>
  )
}

DishContent.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  isAdmin: PropTypes.string,
};