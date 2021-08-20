import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import ShowList from '../screens/ShowList';




const Stack = createStackNavigator()

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="showList"
            >
                <Stack.Screen
                name= "showList"
                component={ShowList}
                options={{title:"Lista Personajes"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}