import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesbuttons from '../buttons/styles';

function historialCalculadora({navigation}) {
  return (
    <View style={stylesbuttons.pantallaHistorial}>
      <TouchableOpacity
        style={stylesbuttons.botonhome}
        onPress={() => navigation.navigate('Home')}>
        <Text style={stylesbuttons.textobotonborrado}>Calculadora</Text>
      </TouchableOpacity>
    </View>
  );
}

export {historialCalculadora};
