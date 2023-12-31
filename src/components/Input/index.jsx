import { Container } from "./style";
import PropTypes from 'prop-types';

export function Input(props) {
  const {labelName, ...rest} = props
  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label htmlFor={`input${labelName.replace(/\s+/g, '_')}`}>
        {labelName}
      </label>

      <div className="inputSpace">
        <input id={`input${labelName.replace(/\s+/g, '_')}`} {...rest}/>
      </div>

    </Container>
  )
}

Input.propTypes = {
  labelName: PropTypes.string
};