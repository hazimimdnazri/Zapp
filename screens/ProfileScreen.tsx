import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ProfileScreen = ({ setLogin } : {setLogin: any}) => {
    const logout = (): any => {
        setLogin(null)
    }

    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Profile screen!</Text>
            <TouchableOpacity onPress={() => logout()} style={{ backgroundColor: 'black', height: '6%', width: '30%', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 20 }}>
                <Text style={{ color: 'white' }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen