import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import addExpression from '../../redux/actions/index'
import stylesbuttons from '../buttons/styles';
import TextoBotonFuncional from '../TextoBotonFuncional'

class BotonesFuncionales extends Component{
  constructor(props) {
    super(props);
  }


  render(){

  return (
    <View style={stylesbuttons.divisorPantallaBotones}>
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={this.props.Limpiarpantalla}
        texto="Delete"
      />
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonesborrado}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={this.props.Borrarultimocaracter}
        texto="&#60;&#60;"
      />
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonhistorial}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={this.props.onSaveExpression}
        texto="Save"
      />
      <TextoBotonFuncional
        estiloBoton={stylesbuttons.botonhistorial}
        estiloTexto={stylesbuttons.textobotonborrado}
        alPresionar={() => this.props.Rutas.navigate('Historial')}
        texto="Hist."
      />

   </View>
  );
};
}

export default BotonesFuncionales
