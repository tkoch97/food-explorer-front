import PropTypes from 'prop-types';
import { Container } from './style';
import { useMediaQuery } from "react-responsive";

export function CreateOrEditDishForm (props) {

  const {type} = props;

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container fontApplied= "POPPINS_400_MEDIUM">
      <p >
        {type === "create" ? (isDesktop ? 'Adicionar prato' : 'Novo prato') : 'Editar prato'}
      </p>
    </Container>
  )
}

CreateOrEditDishForm.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
}