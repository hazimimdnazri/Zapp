import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import axios from 'axios'

const RegisterScreen = ({ navigation } : { navigation:any }) => {
    const [name, onChangeName] = useState('')
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [confirmPassword, onChangeConfirmPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const registerAccount = (name: string, email: string, password: string, confirmPassword: string): any => {
        setLoading(true)

        if(name && email && password && confirmPassword){
            if(password !== confirmPassword){
                setLoading(false)
                Alert.alert(
                    "Error",
                    "The confirmed password does not match.",
                )
                return;
            }
        } else {
            setLoading(false)
            Alert.alert(
                "Error",
                "Please fill in all the required fields.",
            )
            return;
        }

        axios.post('http://192.168.0.104:3000/register', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then((response) => {
            if(response.data.status == 'success'){
                navigation.navigate('Login')
            }
        }).catch((error) => {
            setLoading(false)
            console.log(error);
            Alert.alert(
                "Network Error",
                "Please make sure your are connected to the internet.",
            )
        });
    }
    
    return (
        <View style={{ backgroundColor: 'green', flex: 1 }}>
        <View style={{display: isLoading ? 'flex' : 'none', flexDirection: 'column', position: 'absolute',  backgroundColor: 'white', height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center', opacity: 0.9, zIndex: 1}}>
            <ActivityIndicator size="large" />
            <Text style={{  textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Loading...</Text>
        </View>
        <StatusBar hidden />
        <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', marginBottom: 5 }}>ZAPP!</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>Please fill in the required fields to regsiter.</Text>
        </View>
        <View style={{ backgroundColor: 'white', height: 450, borderTopStartRadius: 40, borderTopEndRadius: 40, alignItems: 'center' }}>
            <TextInput onChangeText={onChangeName} value={name} placeholder='Full Name' style={{ borderWidth: 1, paddingHorizontal: 20, width: '90%', borderRadius: 15, marginBottom: 20, marginTop: 60 }}></TextInput>
            <TextInput onChangeText={onChangeEmail} value={email} placeholder='E-Mail Address' style={{ borderWidth: 1, paddingHorizontal: 20, width: '90%', borderRadius: 15, marginBottom: 20,  }}></TextInput>
            <TextInput onChangeText={onChangePassword} value={password} secureTextEntry={true} placeholder='Password' style={{ borderWidth: 1, paddingHorizontal: 20, width: '90%', borderRadius: 15, marginBottom: 20 }}></TextInput>
            <TextInput onChangeText={onChangeConfirmPassword} value={confirmPassword} secureTextEntry={true} placeholder='Confirm Password' style={{ borderWidth: 1, paddingHorizontal: 20, width: '90%', borderRadius: 15 }}></TextInput>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={ () => registerAccount(name, email, password, confirmPassword) } style={{ backgroundColor: 'green', width: '35%', height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 30, marginHorizontal: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{borderWidth: 2, backgroundColor: 'white', width: '35%', height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 30, marginHorizontal: 5  }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View> 
    )
}

export default RegisterScreen