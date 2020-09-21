import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import { connect } from "react-redux";
import stylesbuttons from '../buttons/styles';
import ExpressionsList from '../ExpressionsList'
import {deleteAllExpressions, editExpression} from '../../redux/actions/index'
import TextoBotonFuncional from '../TextoBotonFuncional'
import AlertMessage from '../AlertMessage'
import API from '../../API'

class HistorialCalculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message:'',
      alertColor:'',
    };
  };

  handleDeleteAll = async () => {
    this.props.dispatch(deleteAllExpressions())
    const response = await API.put('/questions/clean')
    this.setState({
      visible: true,
      message : response.data.message,
      alertColor: '#b60419',
    });
  }

  editExpressionAPI = (mensaje,alertColor) =>{
    this.setState({
      visible: true,
      message : mensaje,
      alertColor: alertColor,
    });
  }

  deleteExpressionAPI = (mensaje,alertColor) =>{
    this.setState({
      visible: true,
      message : mensaje,
      alertColor: alertColor,
    });
  }

  render(){
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={stylesbuttons.scrollView}>
          <View style={stylesbuttons.pantallaHistorial}>
            <ExpressionsList
              editExpression = {this.editExpressionAPI}
              deleteExpression = {this.deleteExpressionAPI}
            />
            <View style={stylesbuttons.containerBotonesHomeBorrado}>
              <TextoBotonFuncional
                estiloBoton={stylesbuttons.botonhome}
                estiloTexto={stylesbuttons.textobotonborrado}
                alPresionar={() => navigation.navigate('Home')}
                texto="Calculadora"
              />
              <TextoBotonFuncional
                estiloBoton={stylesbuttons.botonBorrarHistorial}
                estiloTexto={stylesbuttons.textobotonborrado}
                alPresionar={this.handleDeleteAll}
                texto="Borrar Historial"
              />
            </View>
          </View>
        </ScrollView>
        <AlertMessage
          visible = {this.state.visible}
          onDismiss ={() => this.setState({ visible: false })}
          duration = {1500}
          message = {this.state.message}
          alertColor = {this.state.alertColor}
        />
      </SafeAreaView>
    );
 
  }
}

export default connect()(HistorialCalculadora);
