import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  pantallaCalculadora: {
    flex: 0.3,
    backgroundColor: '#19191b',
  },

  textooperacion: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bdc6c2',
  },

  textoresultado: {
    fontSize: 85,
    fontWeight: 'bold',
    color: '#bdc6c2',
    alignSelf: 'flex-end',
  },
});

export default styles;
