import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RenderInput from '../RenderInput';
import AlertMessage from '../AlertMessage';
import API from '../../API';
import { rememberUser } from '../../redux/actions/index';
import TextoBotonFuncional from '../TextoBotonFuncional';

import styleForm from './style';
import { required, onlyLetters, number, phoneNumber } from './validates';

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      nameToRemember: this.props.storeUserName,
    };
  }

  submit = async values => {
    const userData = { input_values: { values } };
    const response = await API.post('/questions/form_response', userData);
    this.setState({
      visible: true,
      message: response.data.message,
      alertColor: '#b60419',
    });
  };

  goBack = () => {
    this.props.dispatch(rememberUser(this.state.nameToRemember));
    this.props.navigation.navigate('Home');
  };

  handleOnChange = text => {
    this.setState({ nameToRemember: text });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{ flex: 1, backgroundColor: '#19191b' }}>
        <ScrollView>
          <View style={styleForm.container}>
            <View style={styleForm.formInputsContainer}>
              <Field
                label="Nombre y Apellido:"
                component={RenderInput}
                name="userName"
                validate={[required, onlyLetters]}
                onChange={this.handleOnChange}
              />

              <Field
                label="Teléfono:"
                component={RenderInput}
                name="phoneNumber"
                validate={[required, number, phoneNumber]}
              />

              <Field
                label="Comentarios:"
                component={RenderInput}
                name="userComplain"
                validate={[required]}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styleForm.formButtonsContainer}>
              <TextoBotonFuncional
                estiloBoton={styleForm.submitButton}
                estiloTexto={styleForm.textSubmitButton}
                alPresionar={handleSubmit(this.submit)}
                texto="SUBMIT"
              />
              <TextoBotonFuncional
                estiloBoton={styleForm.clearButton}
                estiloTexto={styleForm.textSubmitButton}
                alPresionar={() => this.goBack()}
                texto="CANCEL"
              />
            </View>
          </View>
        </ScrollView>
        <AlertMessage
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          duration={1500}
          message={this.state.message}
          alertColor={'#1256a6'}
        />
      </SafeAreaView>
    );
  }
}

AppForm = reduxForm({
  form: 'initializeFromState',
  enableReinitialize: true,
})(AppForm);

AppForm = connect(state => ({
  initialValues: state.ReducerReduxForm,
  storeUserName: state.ReducerReduxForm.userName,
}))(AppForm);

export default AppForm;
