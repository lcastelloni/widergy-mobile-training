import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesbuttons from '../buttons/styles';
import {BotonesTeclado, TextoBotonFuncional} from '../buttons/index';

const PantallaTeclado = (props) => {
  const OPERACIONES = ['+', '-', 'x', '/'];
  const TECLADONUMERAL = [
    [7, 4, 1],
    [8, 5, 2, 0],
    [9, 6, 3],
  ];
  return (
    <View style={stylesbuttons.containerBotones}>
      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAasignar={TECLADONUMERAL[0]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          funcion={props.arrayNumerosDeOperacion}
        />

        <TextoBotonFuncional
          estiloBoton={stylesbuttons.botondecimal_signo}
          estiloTexto={stylesbuttons.textobotondecimal_signo}
          funcion={props.cambiarSigno}
          texto="+/-"
        />
      </View>
      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAasignar={TECLADONUMERAL[1]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          funcion={props.arrayNumerosDeOperacion}
        />
      </View>
      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAasignar={TECLADONUMERAL[2]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          funcion={props.arrayNumerosDeOperacion}
        />
        <BotonesTeclado
          botonesAasignar={['.']}
          estiloBoton={stylesbuttons.botondecimal_signo}
          estiloTexto={stylesbuttons.textobotondecimal_signo}
          funcion={props.arrayNumerosDeOperacion}
        />
      </View>

      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAasignar={OPERACIONES}
          estiloBoton={stylesbuttons.botonoperacion}
          estiloTexto={stylesbuttons.textoboton}
          funcion={props.funcionOperacion}
        />
        <TouchableOpacity
          style={stylesbuttons.botonoperacion}
          onPress={() => props.resultadoOperacion(0)}>
          <Text style={stylesbuttons.textobotonigual}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {PantallaTeclado};
