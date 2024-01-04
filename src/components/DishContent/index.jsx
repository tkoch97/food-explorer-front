import { BackButton } from '../BackButton/index.jsx'
// import { useAuth } from "../../hooks/authContext";
import { Container, DishImg, DishTitle, DishDescription } from './style.js'
// import { USER_ROLE } from "../../utils/roles";
import { api } from '../../services/api';
import PropTypes from 'prop-types';
import { IngredientTag } from '../IngredientTag/index.jsx';




export function DishContent(props) {
  // const {user} = useAuth();
  const {data} = props;

  const dishImage = `
  ${api.defaults.baseURL}/files/${data.dish.image}`;

  // const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  return (
    <Container>
      <BackButton/>

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