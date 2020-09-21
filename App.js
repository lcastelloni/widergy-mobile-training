import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import AppCalculadora from './components/AppCalculadora';
import HistorialCalculadora from './components/HistorialCalculadora';
import STORE from './redux/store'

const STACK = createStackNavigator();


const AppTrainingMobile=() =>{
  return (
    <Provider store={STORE}>
    <NavigationContainer>
      <STACK.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#18152a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <STACK.Screen
          name="Home"
          options={{
            title: 'CALCULADORA',
          }}
          component={AppCalculadora}
        />

        <STACK.Screen
          name="Historial"
          options={{
            title: 'HISTORIAL',
          }}
          component={HistorialCalculadora}
        />
      </STACK.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default AppTrainingMobile;
