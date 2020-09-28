import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesbuttons from '../buttons/styles';
import BotonesTeclado from '../BotonesTeclado';
import TextoBotonFuncional from '../TextoBotonFuncional'

const Keyboard = (props) => {
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
          botonesAAsignar={TECLADONUMERAL[0]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          alPresionar={props.arrayNumerosDeOperacion}
        />

        <TextoBotonFuncional
          estiloBoton={stylesbuttons.botondecimal_signo}
          estiloTexto={stylesbuttons.textobotondecimal_signo}
          alPresionar={props.cambiarSigno}
          texto="+/-"
        />
      </View>
      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAAsignar={TECLADONUMERAL[1]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          alPresionar={props.arrayNumerosDeOperacion}
        />
      </View>
      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAAsignar={TECLADONUMERAL[2]}
          estiloBoton={stylesbuttons.Botonnumero}
          estiloTexto={stylesbuttons.textoboton}
          alPresionar={props.arrayNumerosDeOperacion}
        />
        <BotonesTeclado
          botonesAAsignar={['.']}
          estiloBoton={stylesbuttons.botondecimal_signo}
          estiloTexto={stylesbuttons.textobotondecimal_signo}
          alPresionar={props.arrayNumerosDeOperacion}
        />
      </View>

      <View style={stylesbuttons.columnaBotones}>
        <BotonesTeclado
          botonesAAsignar={OPERACIONES}
          estiloBoton={stylesbuttons.botonoperacion}
          estiloTexto={stylesbuttons.textoboton}
          alPresionar={props.funcionOperacion}
        />
        <TextoBotonFuncional
          estiloBoton={stylesbuttons.botonoperacion}
          estiloTexto={stylesbuttons.textobotonigual}
          alPresionar={() => props.resultadoOperacion(0)}
          texto="="
        />
      </View>
    </View>
  );
};

export default Keyboard;
