import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const loginName = 'Login'
const registerName = 'Register'

const Stack = createStackNavigator();

const LoginContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { loginName } screenOptions = {() => ({ headerShown: false })}>
                <Stack.Screen name = { loginName } component = { LoginScreen }/>
                <Stack.Screen name = { registerName } component = { RegisterScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginContainer