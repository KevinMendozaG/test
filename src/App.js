import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { Store } from './configureStore'

import Navigations from '../navigations/Navigations';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={Store}>
      <Navigations/>
    </Provider>
  );
}
