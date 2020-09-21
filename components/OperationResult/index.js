import React from 'react';
import {View, Text} from 'react-native';
import stylesfuncbuttons from '../BotonesFuncionales/styles';

const OperationResult = (props) => {
  return (
    <View style={stylesfuncbuttons.pantallaCalculadora}>
      <Text style={stylesfuncbuttons.textooperacion}>{props.textoOperacion}</Text>

      <Text style={stylesfuncbuttons.textoresultado}>{props.textoResultado}</Text>
    </View>
  );
};

export default OperationResult;
