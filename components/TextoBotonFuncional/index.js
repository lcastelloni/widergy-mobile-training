import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const TextoBotonFuncional = (props) => {
  return (
    <TouchableOpacity style={props.estiloBoton} onPress={() => props.alPresionar()}>
      <Text style={props.estiloTexto}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

export default TextoBotonFuncional