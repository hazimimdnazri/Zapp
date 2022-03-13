import React, { useState , useContext} from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import axios from 'axios'
import { LoginContext } from '../contexts/LoginContext'

const LoginScreen = ({navigation} : {navigation:any}) => {
    const [email, onChageEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const { setLogin } : any = useContext(LoginContext)

    interface UserProps {
        email: string, password: string
    }

    const CheckLogin: React.FC<UserProps> = ({email, password}): any => {
        setLoading(true)
        axios.post('http://192.168.0.104:3000/login', {
            email: email,
            password: password
        }).then((response) => {
            if(response.data.status == 'success'){
                setLogin(response.data.token)
            } else {
                Alert.alert(
                    'Error',
                    response.data.message,
                )
                setLoading(false)
            }
        }).catch((error) => {
            setLoading(false)
            console.log(error)
            Alert.alert(
                "Network Error",
                "Please make sure your are connected to the internet.",
            )
        });
    }

    return (
        <View style={{ backgroundColor: '#0d47a1', flex: 1 }}>
            <View style={{display: isLoading ? 'flex' : 'none', flexDirection: 'column', position: 'absolute',  backgroundColor: 'white', height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center', opacity: 0.9, zIndex: 1}}>
                <ActivityIndicator size="large" />
                <Text style={{  textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Loading...</Text>
            </View>
            <StatusBar hidden />
            <View style={{ flex: 1, backgroundColor: '#0d47a1', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', marginBottom: 5 }}>ZAPP!</Text>
                <Text style={{ color: 'white', fontSize: 15 }}>Welcome to Zimy's App!</Text>
                <Text style={{ color: 'white', fontSize: 15 }}>Please log in to continue.</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 350, borderTopStartRadius: 40, borderTopEndRadius: 40, alignItems: 'center' }}>
                <TextInput onChangeText={onChageEmail} value={email} placeholder='E-Mail Address' style={{ borderWidth: 1, paddingHorizontal: 20, width: '70%', borderRadius: 15, marginBottom: 20, marginTop: 60 }}></TextInput>
                <TextInput onChangeText={onChangePassword} value={password} secureTextEntry={true} placeholder='Password' style={{ borderWidth: 1, paddingHorizontal: 20, width: '70%', borderRadius: 15 }}></TextInput>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => CheckLogin({email, password})} style={{ backgroundColor: '#0d47a1', width: '35%', height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 30, marginHorizontal: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{borderWidth: 2, backgroundColor: 'white', width: '35%', height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 30, marginHorizontal: 5  }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    )
}

export default LoginScreen