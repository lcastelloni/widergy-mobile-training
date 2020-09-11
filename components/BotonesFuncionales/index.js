import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesbuttons from '../buttons/styles';
import TextoBotonFuncional from '../TextoBotonFuncional'

const BotonesFuncionales = (props) => {
  return (
    <View style={stylesbuttons.divisorPantallaBotones}>
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={props.Limpiarpantalla}
        texto="Delete"
      />
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={props.Borrarultimocaracter}
        texto="&#60;&#60;"
      />
      <TouchableOpacity
        style={stylesbuttons.botonhistorial}
        onPress={() => props.Rutas.navigate('Historial')}>
        <Text style={stylesbuttons.textobotonborrado}>Historial</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotonesFuncionales;
