import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pantallaHistorial: {
    backgroundColor: '#19191b',
    flex: 1,
    alignItems: 'center',
  },

  scrollView: {
    backgroundColor: '#19191b',
    flex: 1,
  },

  botonBorrarExpresion: {
    margin: 4,
    width: 50,
    height: 50,
    backgroundColor: '#a0091a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  textoBotonEditarExpresion: {
    fontSize: 37,
    fontWeight: 'bold',
    color: '#bdc6c2',
  },

  containerBotonesHomeBorrado: {
    margin: 8,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerListaExpresiones: {
    flex: 0.8,
    justifyContent: 'center',
  },

  containerBotones: {
    flex: 0.8,
    backgroundColor: '#1D1F1E',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  columnaBotones: {
    justifyContent: 'space-around',
  },

  divisorPantallaBotones: {
    flex: 0.155,
    backgroundColor: '#5f5e61',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Botonnumero: {
    width: 90,
    height: 90,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },

  botondecimal_signo: {
    width: 90,
    height: 90,
    backgroundColor: '#201b3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },

  botonesborrado: {
    width: 80,
    height: 60,
    backgroundColor: '#a0071a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  botonGuardarExpresion: {
    width: 80,
    height: 60,
    backgroundColor: '#a0071a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  botonhistorial: {
    width: 77,
    height: 67,
    backgroundColor: '#201b3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#bdc6c2',
  },

  botonhome: {
    margin: 5,
    width: 230,
    height: 60,
    backgroundColor: '#201b3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  botonBorrarHistorial: {
    margin: 5,
    width: 230,
    height: 60,
    backgroundColor: '#a0071a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  botonoperacion: {
    width: 70,
    height: 70,
    backgroundColor: '#59901d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#bdc6c2',
  },

  textoboton: {
    fontSize: 45,
    fontWeight: 'bold',
  },

  textobotondecimal_signo: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#bdc6c2',
  },

  textobotonigual: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#bdc6c2',
  },

  textobotonborrado: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#bdc6c2',
  },

  containerExpresion: {
    margin: 7,
    width: 355,
    height: 70,
    backgroundColor: '#3a3c58',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },

  containerTextoExpresion: {
    flex: 0.7,
  },

  containerBotonesExpresion: {
    flex: 0.24,
    alignItems: 'flex-end',
  },
});

export default styles;
