import { Container } from "./style";
import PropTypes from 'prop-types';
import uploadIcon from '../../assets/uploadIcon.svg';

export function UploadImage(props) {
  const {labelName, buttonTitle, id, onImageChange, ...rest} = props;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if(file) {
      onImageChange(file) 
    }
  }

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label htmlFor={id}>
        {labelName}

        <div className="buttonSpace">
          <img src={uploadIcon} alt="seta paa cima - ícone de upload" />
          <p>{buttonTitle}</p>
        </div>
        
      </label>

      <input id={id} type='file' accept="image/*" onChange={handleImageChange} {...rest}/>

    </Container>
  )
}

UploadImage.propTypes = {
  labelName: PropTypes.string,
  buttonTitle: PropTypes.string,
  id: PropTypes.string,
  onImageChange: PropTypes.func,
};