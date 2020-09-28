import React from 'react';
//import {Snackbar} from 'react-native-paper'
import Snackbar from 'react-native-paper/lib/commonjs/components/Snackbar.js'
import {Text} from 'react-native';
import stylesfuncbuttons from '../BotonesFuncionales/styles';


const AlertMessage = (props) => {
  return (
    <Snackbar
        visible={props.visible}
        onDismiss={props.onDismiss}
        duration = {props.duration}
        theme={{
            colors: {
                onSurface: props.alertColor,
            },
        }}
    >
        <Text style={stylesfuncbuttons.textoAlerta}> {props.message} </Text>

    </Snackbar>
  


  );
};

export default AlertMessage;
