import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LoginContext, LoadingContext } from '../contexts/Contexts'

const ProfileScreen = () => {
    const { setLogin } : any = useContext(LoginContext)
    const { setLoading } : any = useContext(LoadingContext)

    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Profile screen!</Text>
            <TouchableOpacity onPress={() => setLogin(null)} style={{ backgroundColor: 'black', height: '6%', width: '30%', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 20 }}>
                <Text style={{ color: 'white' }}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLoading(true)} style={{ backgroundColor: 'black', height: '6%', width: '30%', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 20 }}>
                <Text style={{ color: 'white' }}>Loading</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen