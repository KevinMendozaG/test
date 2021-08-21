import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { Store } from './configureStore'

import Navigations from '../navigations/Navigations';

const Stack = createStackNavigator()

function App() {
  return (
    //Utilizando un componente Navigations en el cual se crea la navegación 
    <Provider store={Store}>
      <Navigations/> 
    </Provider>
  );
}
export default App