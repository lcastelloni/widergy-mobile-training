const required = values => {
  if (!values) {
    return 'Campo requerido !';
  }
};

const onlyLetters = value => {
  if (value && /[^a-zA-Z ]/i.test(value)) {
    return 'Solo letras !';
  }
};

const number = value => (value && isNaN(Number(value)) ? 'Debe ser un numero' : undefined);

const phoneNumber = value => {
  if (value && !/^([0-9]{10})$/i.test(value)) {
    return 'Debe tener 10 digitos';
  }
};

export { required, onlyLetters, number, phoneNumber };
