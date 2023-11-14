import {Container} from "./style"
import PropTypes from 'prop-types';

export function SectionHome(props) {
  const {title, children} = props

  return(
    <Container
      fontApplied="POPPINS_400_MEDIUM"
    >

      <p>{title}</p>
      <div className="cardContainer">
        {children}
      </div>


    </Container>
  )
}

SectionHome.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}