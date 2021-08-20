import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { Store } from './src/configureStore'

import Navigations from './navigations/Navigations';

const Stack = createStackNavigator()

export default function App() {
  return (
    //Utilizando un componente Navigations en el cual se crea la navegación 
    <Provider store={Store}>
      <Navigations/> 
    </Provider>
  );
}
