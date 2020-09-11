import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {appCalculadora} from './components/calculator/index';
import {historialCalculadora} from './components/history/index';

const STACK = createStackNavigator();

function appTrainingMobile() {
  return (
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
          component={appCalculadora}
        />

        <STACK.Screen
          name="Historial"
          options={{
            title: 'HISTORIAL',
          }}
          component={historialCalculadora}
        />
      </STACK.Navigator>
    </NavigationContainer>
  );
}

export default appTrainingMobile;
