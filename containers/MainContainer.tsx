import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsSceen'
import ScanScreen from '../screens/ScanScreen'

const homeName = 'Home'
const profileName = 'Profile'
const settingsName = 'Settings'
const scanName = 'Scan'

const Tab = createBottomTabNavigator();

const MainContainer = ({ setLogin } : {setLogin: any}) => {
    return (
        <NavigationContainer>
            <StatusBar hidden/>
            <Tab.Navigator initialRouteName = {homeName} 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: any
                        let rn = route.name

                        switch (rn) {
                            case homeName:
                                iconName = 'home'
                                break;
                        
                            case profileName:
                                iconName = 'person'
                                break;
                        
                            case scanName:
                                iconName = 'scan'
                                break;
                        
                            case settingsName:
                                iconName = 'settings'
                                break;
                        
                            default:
                                break;
                        }

                        return <Ionicons nativeID = '' name = { iconName } size = { size } color = { color }/>
                    },
                    headerShown: false
                })}>
                <Tab.Screen name={ homeName } component = { HomeScreen } />
                <Tab.Screen name={ profileName } children = { (): any => <ProfileScreen setLogin = { setLogin }/> }/>
                <Tab.Screen name={ scanName } component = { ScanScreen } />
                <Tab.Screen name={ settingsName } component = { SettingsScreen } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer