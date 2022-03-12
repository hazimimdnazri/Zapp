import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const loginName = 'Login'
const registerName = 'Register'

const Stack = createStackNavigator();

const LoginContainer = ({ setLogin } : {setLogin: any}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { loginName } screenOptions = {() => ({ headerShown: false })}>
                <Stack.Screen name = { loginName } children = { (props): any => <LoginScreen setLogin = { setLogin } { ...props }/> }/>
                <Stack.Screen name = { registerName }children = { (props): any => <RegisterScreen { ...props }/> } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginContainer