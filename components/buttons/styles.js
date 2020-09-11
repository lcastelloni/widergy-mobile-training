import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pantallaHistorial: {
    backgroundColor: '#19191b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 0.15,
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
    width: 130,
    height: 60,
    backgroundColor: '#a0071a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  botonhistorial: {
    width: 130,
    height: 60,
    backgroundColor: '#201b3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  botonhome: {
    width: 200,
    height: 60,
    backgroundColor: '#201b3d',
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
});

export default styles;
