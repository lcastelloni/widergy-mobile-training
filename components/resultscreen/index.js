import React from 'react';
import {View, Text} from 'react-native';
import stylesscreen from '../middlescreen/styles';

const PantallaResultado = (props) => {
  return (
    <View style={stylesscreen.pantallaCalculadora}>
      <Text style={stylesscreen.textooperacion}>{props.textoOperacion}</Text>

      <Text style={stylesscreen.textoresultado}>{props.textoResultado}</Text>
    </View>
  );
};

export {PantallaResultado};
