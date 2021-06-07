import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogInScreen from '../screens/LogInScreen'
import SignUpScreeen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const AuthenticationStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignIn" component={LogInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreeen} />
        </Stack.Navigator>
    )

}

export const AuthenticatedStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}