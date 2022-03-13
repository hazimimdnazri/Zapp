import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar, View, ActivityIndicator, Text } from 'react-native'
import { LoadingContext } from '../contexts/Contexts'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsSceen'
import ScanScreen from '../screens/ScanScreen'

const homeName = 'Home'
const profileName = 'Profile'
const settingsName = 'Settings'
const scanName = 'Scan'

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    const [isLoading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ setLoading }} >
            <NavigationContainer>
                <StatusBar hidden/>
                <View style={{ flex: 1 }}>
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
                        <Tab.Screen name={ profileName } component = { ProfileScreen }/>
                        <Tab.Screen name={ scanName } component = { ScanScreen } />
                        <Tab.Screen name={ settingsName } component = { SettingsScreen } />
                    </Tab.Navigator>
                    <View style={{display: isLoading ? 'flex' : 'none', flexDirection: 'column', position: 'absolute',  backgroundColor: 'white', height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center', opacity: 0.8}}>
                        <ActivityIndicator size="large" />
                        <Text style={{  textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Loading...</Text>
                    </View>
                </View>
            </NavigationContainer>
        </LoadingContext.Provider>
    )
}

export default MainContainer