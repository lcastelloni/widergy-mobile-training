/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  InputAccessoryView,
} from 'react-native';

let PrimerNumero = '';
let SegundoNumero = '';
let operacionEnCurso = '';
let operacionAcontinuar='';


class appCalculadoraLucas extends Component {
  
  constructor() {
    super()
    this.state = {
      textoOperacion: '',
      textoResultado: '0',
    }
  };

  ArrayNumerosDeOperacion=(numero)=>{
    if(!operacionEnCurso){
      PrimerNumero = PrimerNumero + numero;
      this.setState({
        textoOperacion : this.state.textoOperacion + numero
      })
    }
    else{
      SegundoNumero = SegundoNumero + numero;
      this.setState({
        textoOperacion : this.state.textoOperacion + numero
      })
    }  
  };

  FuncionOperacion=(tipo_de_operacion)=>{
    if(PrimerNumero.length === 0){
    }
    else if(!operacionEnCurso){
      this.setState({
        textoOperacion : this.state.textoOperacion + ' ' +tipo_de_operacion + ' ',
      })
      operacionEnCurso = tipo_de_operacion
    }
    else if(operacionEnCurso && !SegundoNumero){
      this.setState({
        textoOperacion : this.state.textoOperacion.slice(0,-2) + tipo_de_operacion + ' ',
      })
      operacionEnCurso = tipo_de_operacion
    }
    else{
      operacionAcontinuar = tipo_de_operacion
      this.ResultadoOperacion(1)  
    }
  };

  ResultadoOperacion=(CotinuarOperacion)=>{
    let numero1 = parseFloat(PrimerNumero);
    let numero2 = parseFloat(SegundoNumero);
    let resultadoFinal = 0;
    switch (operacionEnCurso) {
      case '+':
        resultadoFinal = numero1 + numero2
        break;
      case '-':
        resultadoFinal = numero1 - numero2
        break;
      case '/':
        resultadoFinal = numero1 / numero2
        break;
      case 'x':
        resultadoFinal = numero1 * numero2
        break;   
    }
    if(CotinuarOperacion){
      SegundoNumero = '';
      PrimerNumero = resultadoFinal.toString();
      operacionEnCurso = operacionAcontinuar 
      this.setState({
        textoResultado: resultadoFinal,
        textoOperacion: PrimerNumero + ' ' + operacionEnCurso + ' ',
      })
      
    }
    else{
      PrimerNumero = '';
      SegundoNumero = '';
      operacionEnCurso='';
      this.setState({
        textoResultado: resultadoFinal,
        textoOperacion : '',
      })

    }
    
  };

  LimpiarPantalla(){
    PrimerNumero = '';
    SegundoNumero = '';
    operacionEnCurso='';
    this.setState({
      textoResultado: '0',
      textoOperacion : '',
    })
  }

  BorrarUltimoCaracter(){
    if(!PrimerNumero){

    }
    else if(PrimerNumero && !operacionEnCurso){
      PrimerNumero = PrimerNumero.slice(0,-1);
      this.setState({
        textoOperacion : this.state.textoOperacion.slice(0,-1),
      });
    }
    else if(operacionEnCurso && !SegundoNumero){
      operacionEnCurso = '';
      this.setState({
        textoOperacion : PrimerNumero
      });
    }
    else{
      SegundoNumero = SegundoNumero.slice(0,-1);
      this.setState({
        textoOperacion : this.state.textoOperacion.slice(0,-1),
      });

    }
  }

  CambiarSigno(){
    if(!PrimerNumero || (PrimerNumero && operacionEnCurso && !SegundoNumero)){
    }
    else{
      let numeroSigno = 0;
      if(PrimerNumero && !operacionEnCurso){
        numeroSigno = parseFloat(PrimerNumero);
        if(numeroSigno<0){
          PrimerNumero = PrimerNumero.slice(1);
        }
        else{
          PrimerNumero = '-'.concat(PrimerNumero)
        }
        this.setState({
          textoOperacion : PrimerNumero
        });
         
      }
      else{
        numeroSigno = parseFloat(SegundoNumero);
        if(numeroSigno<0){
          SegundoNumero = SegundoNumero.slice(1);
        }
        else{
          SegundoNumero = '-'.concat(SegundoNumero)
        }
        let posicion = this.state.textoOperacion.indexOf(operacionEnCurso)
        this.setState({
          textoOperacion : this.state.textoOperacion.slice(0,posicion+2) + SegundoNumero,
        });

        
      }
    }
  }



  render(){

    let operaciones = ['+','-','x','/'];
    let ops = [];
    for(let i =0; i<operaciones.length; i++){
      ops.push(<TouchableOpacity
        style={styles.estiloBotonOperacion}
        onPress={()=>this.FuncionOperacion(operaciones[i])}
       >
        <Text style={styles.estiloTextoBoton}>{operaciones[i]}</Text>
      </TouchableOpacity>)
    }

    let numeros = [[7,4,1],[8,5,2,0],[9,6,3]];
    let columnasNumeros =[[],[],[]];
    for(let j=0; j<numeros.length; j++){
      for(let k=0; k<numeros[j].length;k++){
        columnasNumeros[j].push(<TouchableOpacity
          style={styles.estiloBoton}
          onPress={()=>this.ArrayNumerosDeOperacion(numeros[j][k])}
         >
          <Text style={styles.estiloTextoNumero}>{numeros[j][k]}</Text>
        </TouchableOpacity>)
      }

    }

   return (
    <View style={styles.container}>

      <View style={styles.pantallaCalculadora}>

   <Text style={styles.estiloTextoOperacion}>{this.state.textoOperacion}</Text>

      <Text style={styles.estiloTextoResultado}>{this.state.textoResultado}</Text>

      </View>

      <View style={styles.divisorPantallaBotones}>
      <TouchableOpacity
              style={styles.estiloBotonesBorrado}
              onPress={()=>this.LimpiarPantalla()}  
              >
             <Text style={styles.estiloTextoBotonBorrado}>Delete</Text>
           </TouchableOpacity>
  

        <TouchableOpacity
              style={styles.estiloBotonesBorrado}
              onPress={()=>this.BorrarUltimoCaracter()}
              >
             <Text style={styles.estiloTextoBotonBorrado}>&#60;&#60;</Text>
           </TouchableOpacity>
      </View>

      <View style={styles.containerBotones}>
       
          <View style={styles.columnaBotones}>

            {columnasNumeros[0]}

            <TouchableOpacity
              style={styles.estiloBotonDecimal_Signo}
              onPress={()=>this.CambiarSigno()}
              >
             <Text style={styles.estiloTextoBotonDecimal_Signo}>+/-</Text>
           </TouchableOpacity>
          </View>


         <View style={styles.columnaBotones}>
          {columnasNumeros[1]}
        </View>
         <View style={styles.columnaBotones}>
         {columnasNumeros[2]}
          <TouchableOpacity
            style={styles.estiloBotonDecimal_Signo}
            onPress={()=>this.ArrayNumerosDeOperacion('.')}
           >
            <Text style={styles.estiloTextoBotonDecimal_Signo}>.0</Text>
          </TouchableOpacity>
          </View>
        

         <View style={styles.columnaBotones}>

           {ops}

          <TouchableOpacity
            style={styles.estiloBotonOperacion}
            onPress={()=>this.ResultadoOperacion(0)}
           >
            <Text style={styles.estiloTextoBotonIgual}>=</Text>
            
          </TouchableOpacity>

        </View>
       


      </View>

    </View>
  )
}}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
  },

  pantallaCalculadora:{
    flex: 0.30,
    backgroundColor: '#19191b',
  },

  divisorPantallaBotones:{
    flex: 0.12,
    backgroundColor: '#5f5e61',
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems:"center"
  },

  containerBotones:{
    flex: 0.8,
    backgroundColor: '#1D1F1E',
    justifyContent: "space-around",
    flexDirection: 'row',
     },

 

  columnaBotones:{
    justifyContent: "space-around",
  },

  estiloBoton:{
    width: 100, 
    height: 100,
    backgroundColor: 'darkslateblue',
    alignItems: "center",
    justifyContent: "center",
    borderRadius:35,
  },

  estiloBotonDecimal_Signo:{
    width: 100, 
    height: 100,
    backgroundColor: '#201b3d',
    alignItems: "center",
    justifyContent: "center",
    borderRadius:45,
  },

  estiloBotonesBorrado:{
    width: 170, 
    height: 60,
    backgroundColor: '#a0071a',
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
  },

  estiloBotonOperacion:{
    width: 80, 
    height: 80,
    backgroundColor: '#59901d',
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
    borderWidth: 3,
    borderColor: '#bdc6c2',
  },


  estiloTextoBoton: {
    fontSize: 45,
    fontWeight: "bold",
  },

  estiloTextoBotonDecimal_Signo: {
    fontSize: 45,
    fontWeight: "bold",
    color:'#bdc6c2', 
  },

  estiloTextoOperacion: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#bdc6c2',
  },

  estiloTextoResultado: {
    fontSize: 85,
    fontWeight: "bold",
    color: '#bdc6c2',
    alignSelf:'flex-end',
  },


  estiloTextoBotonIgual: {
    fontSize: 45,
    fontWeight: "bold",
    color:'#bdc6c2',
  },

  estiloTextoNumero: {
    fontSize: 55,
    fontWeight: "bold"
  },

  estiloTextoBotonBorrado: {
    fontSize: 32,
    fontWeight: "bold",
    color:'#bdc6c2',
  },

  

})

export default appCalculadoraLucas;
