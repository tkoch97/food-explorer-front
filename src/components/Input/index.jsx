import { Container } from "./style";
import PropTypes from 'prop-types';
import { moneyMask } from "./masks";
import { useCallback } from "react";

export function Input(props) {
  const {labelName, type, mask, onChange, ...rest} = props

  const insertMaskPattern = useCallback((e) => {
    if(mask === 'money') {
      moneyMask(e);
    }
  }, [mask])
  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label htmlFor={`input${labelName.replace(/\s+/g, '_')}`}>
        {labelName}
      </label>

      <div className="inputSpace">
        <input 
        id={`input${labelName.replace(/\s+/g, '_')}`} 
        type={type}
        onKeyUp={insertMaskPattern}
        onChange={onChange}
        {...rest}
        />
      </div>

    </Container>
  )
}

Input.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.string,
  onChange: PropTypes.func,
};