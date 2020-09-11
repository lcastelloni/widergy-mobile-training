import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const BotonesTeclado = (props) => {
  return props.botonesAAsignar.map((tecla) => {
    return (
      <TouchableOpacity
        key={tecla}
        style={props.estiloBoton}
        onPress={() => props.alPresionar(tecla)}>
        <Text style={props.estiloTexto}>{tecla}</Text>
      </TouchableOpacity>
    );
  });
};

export default BotonesTeclado