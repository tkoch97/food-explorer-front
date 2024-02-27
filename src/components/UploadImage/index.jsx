import { Container } from "./style";
import PropTypes from 'prop-types';
import uploadIcon from '../../assets/uploadIcon.svg';

export function UploadImage(props) {
  const {labelName, buttonTitle, ...rest} = props
  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label htmlFor={`input${labelName.replace(/\s+/g, '_')}`}>
        {labelName}

        <div className="buttonSpace">
          <img src={uploadIcon} alt="seta paa cima - ícone de upload" />
          <p>{buttonTitle}</p>
        </div>
        
      </label>

      <input id={`input${labelName.replace(/\s+/g, '_')}`} type='file'{...rest}/>

    </Container>
  )
}

UploadImage.propTypes = {
  labelName: PropTypes.string,
  buttonTitle: PropTypes.string,
};