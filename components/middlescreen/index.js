import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesbuttons from '../buttons/styles';
import {TextoBotonFuncional} from '../buttons/index';

const PantallaBotonesFuncionales = (props) => {
  return (
    <View style={stylesbuttons.divisorPantallaBotones}>
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        funcion={props.Limpiarpantalla}
        texto="Delete"
      />
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        funcion={props.Borrarultimocaracter}
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

export {PantallaBotonesFuncionales};