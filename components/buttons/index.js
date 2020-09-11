import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const TextoBotonFuncional = (props) => {
  return (
    <TouchableOpacity style={props.estiloBoton} onPress={() => props.funcion()}>
      <Text style={props.estiloTexto}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const BotonesTeclado = (props) => {
  return props.botonesAasignar.map((tecla) => {
    return (
      <TouchableOpacity
        key={tecla}
        style={props.estiloBoton}
        onPress={() => props.funcion(tecla)}>
        <Text style={props.estiloTexto}>{tecla}</Text>
      </TouchableOpacity>
    );
  });
};

export {BotonesTeclado, TextoBotonFuncional};
