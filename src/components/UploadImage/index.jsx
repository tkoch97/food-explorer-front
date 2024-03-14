import { Container } from "./style";
import PropTypes from 'prop-types';
import uploadIcon from '../../assets/uploadIcon.svg';

export function UploadImage(props) {
  const {labelName, buttonTitle, id, onImageChange, ...rest} = props;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const selectedImageMsg = document.getElementById('selectedImageMsg');

    if(file) {
      onImageChange(file);
      selectedImageMsg.innerHTML = `Imagem selecionada: ${file.name}`
    }
  }

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label htmlFor={id}>
        {labelName}

        <div className="buttonSpace">
          <img src={uploadIcon} alt="seta paa cima - ícone de upload" />
          <p id="buttonTitle">{buttonTitle}</p>
        </div>

        <p id="selectedImageMsg"></p>
        
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