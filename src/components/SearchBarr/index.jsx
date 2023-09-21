import { FiSearch } from "react-icons/fi";
import { Container } from "./style";
import PropTypes from 'prop-types';

export function SearchBarr(props) {
  const {placeholder, ...rest} = props

  return (
    <Container fontApplied="ROBOTO_SMALL_REGULAR">
      <FiSearch />
      <input {...rest} placeholder={placeholder}/>
    </Container>
  )
}

SearchBarr.propTypes = {
  placeholder: PropTypes.string,
};