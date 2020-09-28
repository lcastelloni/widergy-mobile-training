import React, { Component } from 'react';
import stylesbuttons from '../buttons/styles';
import {View, TextInput} from 'react-native';
import { connect } from "react-redux";
import {deleteExpression, editExpression} from '../../redux/actions/index'
import TextoBotonFuncional from '../TextoBotonFuncional';
import API from '../../API'

class Expression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expressionValue: this.props.textoExpresion,
    };
  };


  handleDeletedExpression = async (indexExpression) => {
    this.props.dispatch(deleteExpression(indexExpression))
    const response = await API.delete('/questions',{ id: indexExpression, expression: this.state.expressionValue})
    this.props.deleteExpression(response.data.message,'#b60419')
  }


  handleEditExpression = async (expressionText, indexExpression) => {
    this.props.dispatch(editExpression(indexExpression, expressionText))
    const response = await API.put('/questions',{ id: indexExpression, expression: expressionText })
    this.props.editExpression(response.data.message,'#4C781C')
  }

  render(){
      return (
        <View style={stylesbuttons.containerExpresion}>
          <View style={stylesbuttons.containerTextoExpresion}>
            <TextInput
              style={stylesbuttons.textobotonborrado}
              value = {this.state.expressionValue}
              onChangeText={(value) => this.setState({expressionValue: value.replace(/[^0-9=*+-/]/g, '') })}
              onSubmitEditing={(event) => this.handleEditExpression(event.nativeEvent.text,this.props.id)}
            />
          </View>
          <View style={stylesbuttons.containerBotonesExpresion}>
            <TextoBotonFuncional
              estiloBoton={stylesbuttons.botonBorrarExpresion}
              estiloTexto={stylesbuttons.textoBotonEditarExpresion}
              alPresionar={() => this.handleDeletedExpression(this.props.id)}
              texto="X"
           />
          </View>
        </View>
  
      );
  }
};


export default connect()(Expression);