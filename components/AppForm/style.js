import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#19191b',
    alignItems: 'center',
  },

  formLabels: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bdc6c2',
    alignSelf: 'flex-start',
    marginLeft: 6,
  },

  formInputsContainer: {
    margin: 25,
    flex: 0.7,
  },

  formButtonsContainer: {
    flex: 0.4,
    flexDirection: 'row',
  },

  inputBox: {
    width: 335,
    backgroundColor: '#201b3d',
    borderRadius: 10,
    marginBottom: 15,
    color: '#bdc6c2',
    fontSize: 22,
    fontWeight: 'bold',
  },

  errorMessage: {
    width: 200,
    backgroundColor: '#bdc6c2',
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#a0071a',
  },

  textError: {
    color: '#a0071a',
    fontSize: 15,
    fontWeight: 'bold',
  },

  submitButton: {
    width: 165,
    height: 60,
    backgroundColor: '#1256a6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    alignContent: 'center',
  },

  clearButton: {
    width: 165,
    height: 60,
    backgroundColor: '#a0071a',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
  },

  textSubmitButton: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#bdc6c2',
    marginLeft: 6,
  },
});

export default styles;
