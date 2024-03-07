import PropTypes from 'prop-types';

import { api } from "../services/api";

export function createDish(props) {

  const informationsToSendToApi = props;

  // api.post("/dish", {informationsToSendToApi})

  function verifyData(data) {
    console.log("Verificando datos recebidos ->", data)
  }

  verifyData(informationsToSendToApi);
}

createDish.PropTypes = {
  data: PropTypes.object,
} 

