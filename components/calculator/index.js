import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View} from 'react-native';
import stylesscreen from '../middlescreen/styles';
import {PantallaBotonesFuncionales} from '../middlescreen/index';
import {PantallaTeclado} from '../keyboard/index';
import {PantallaResultado} from '../resultscreen/index';

class appCalculadora extends Component {
  constructor() {
    super();
    this.state = {
      textoOperacion: '',
      textoResultado: '0',
      primerNumero: '',
      segundoNumero: '',
      operacionEnCurso: '',
    };
  }

  arrayNumerosDeOperacion = (numero) => {
    if (!this.state.operacionEnCurso) {
      this.setState({
        textoOperacion: this.state.textoOperacion + numero,
        primerNumero: this.state.primerNumero + numero,
      });
    } else {
      this.setState({
        textoOperacion: this.state.textoOperacion + numero,
        segundoNumero: this.state.segundoNumero + numero,
      });
    }
  };

  funcionOperacion = (tipo_de_operacion) => {
    if (!this.state.primerNumero) {
      return;
    } else if (!this.state.operacionEnCurso) {
      this.setState({
        textoOperacion:
          this.state.textoOperacion + ' ' + tipo_de_operacion + ' ',
        operacionEnCurso: tipo_de_operacion,
      });
    } else if (this.state.operacionEnCurso && !this.state.segundoNumero) {
      this.setState({
        textoOperacion:
          this.state.textoOperacion.slice(0, -2) + tipo_de_operacion + ' ',
        operacionEnCurso: tipo_de_operacion,
      });
    } else {
      this.resultadoOperacion(tipo_de_operacion);
    }
  };

  resultadoOperacion = (continuarOperacion) => {
    if (
      !this.state.primerNumero ||
      (this.state.operacionEnCurso && !this.state.segundoNumero)
    ) {
      return; // Devuelve nada si se presiona la tecla "=" sin haber ingresado nada
    } else if (this.state.primerNumero && !this.state.operacionEnCurso) {
      this.setState({
        textoResultado: this.state.primerNumero,
      });
    } else {
      const operationDic = {
        ['+']: (num1, num2) => num1 + num2,
        ['-']: (num1, num2) => num1 - num2,
        ['x']: (num1, num2) => num1 * num2,
        ['/']: (num1, num2) => num1 / num2,
      };
      const resultadoFinal = operationDic[this.state.operacionEnCurso](
        parseFloat(this.state.primerNumero),
        parseFloat(this.state.segundoNumero),
      );
      if (continuarOperacion) {
        this.setState({
          operacionEnCurso: continuarOperacion,
          textoResultado: resultadoFinal.toString(),
          segundoNumero: '',
          primerNumero: resultadoFinal.toString(),
          textoOperacion: resultadoFinal + ' ' + continuarOperacion + ' ',
        });
      } else {
        this.setState({
          textoResultado: resultadoFinal,
          textoOperacion: '',
          primerNumero: '',
          segundoNumero: '',
          operacionEnCurso: '',
        });
      }
    }
  };

  limpiarPantalla = () => {
    this.setState({
      textoResultado: '0',
      textoOperacion: '',
      primerNumero: '',
      segundoNumero: '',
      operacionEnCurso: '',
    });
  };

  borrarUltimoCaracter = () => {
    if (!this.state.primerNumero) {
      return;
    } else if (this.state.primerNumero && !this.state.operacionEnCurso) {
      this.setState({
        primerNumero: this.state.primerNumero.slice(0, -1),
        textoOperacion: this.state.textoOperacion.slice(0, -1),
      });
    } else if (this.state.operacionEnCurso && !this.state.segundoNumero) {
      this.setState({
        operacionEnCurso: '',
        textoOperacion: this.state.primerNumero,
      });
    } else {
      this.setState({
        segundoNumero: this.state.segundoNumero.slice(0, -1),
        textoOperacion: this.state.textoOperacion.slice(0, -1),
      });
    }
  };

  cambioDeSigno = (numeroACambiar) => {
    if (parseFloat(numeroACambiar) < 0) {
      numeroACambiar = numeroACambiar.slice(1);
    } else {
      numeroACambiar = '-'.concat(numeroACambiar);
    }
    return numeroACambiar;
  };

  cambiarSigno = () => {
    if (
      !this.state.primerNumero ||
      (this.state.primerNumero &&
        this.state.operacionEnCurso &&
        !this.state.segundoNumero)
    ) {
      return; // Si alguno de los numeros al que se quiere cambiar signo no existe, no se ejecuta la operacion
    } else {
      if (this.state.primerNumero && !this.state.operacionEnCurso) {
        this.state.primerNumero = this.cambioDeSigno(this.state.primerNumero);
        this.setState({
          textoOperacion: this.state.primerNumero,
        });
      } else {
        this.state.segundoNumero = this.cambioDeSigno(this.state.segundoNumero);
        const POSICION = this.state.textoOperacion.indexOf(
          this.state.operacionEnCurso,
        );
        this.setState({
          textoOperacion:
            this.state.textoOperacion.slice(0, POSICION + 2) +
            this.state.segundoNumero,
        });
      }
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={stylesscreen.container}>
        <PantallaResultado
          textoOperacion={this.state.textoOperacion}
          textoResultado={this.state.textoResultado}
        />

        <PantallaBotonesFuncionales
          Limpiarpantalla={this.limpiarPantalla}
          Borrarultimocaracter={this.borrarUltimoCaracter}
          Rutas={navigation}
        />

        <PantallaTeclado
          arrayNumerosDeOperacion={this.arrayNumerosDeOperacion}
          cambiarSigno={this.cambiarSigno}
          funcionOperacion={this.funcionOperacion}
          resultadoOperacion={this.resultadoOperacion}
        />
      </View>
    );
  }
}

export {appCalculadora};
