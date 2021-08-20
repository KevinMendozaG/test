import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import ShowList from '../screens/ShowList';
import CharacterDetails from '../screens/CharacterDetails';

const Stack = createStackNavigator()

export default function Navigations() {
    //Se crea la navegación por Stack y se agregan 2 pantallas, una para listar los personajes
    //y otra donde se mostrara el detalle del personaje
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="showList"
            >
                <Stack.Screen
                name= "showList"
                component={ShowList}
                options={{title:"Lista de Personajes"}}
                />
                <Stack.Screen
                name= "characterDetail"
                component={CharacterDetails}
                options={{title:"Detalle de Personaje"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
