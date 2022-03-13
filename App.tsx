import React, { useState, useEffect } from 'react'
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { LoginContext } from './contexts/LoginContext';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {  
		getLogin()
	}, [])  

	const setLogin = async (token: any) => {
		if(token !== null){
			try {
				await AsyncStorage.setItem('@token', token)
				setLoggedIn(true)
			} catch (e) {
				console.log(e)
			}
		} else {
			try {
				await AsyncStorage.removeItem('@token');
				setLoggedIn(false)
			} catch (e) {
				console.log(e)
			}
		}
	}

	const getLogin = async () => {
		try {
			const value = await AsyncStorage.getItem('@token')
			if(value !== null) {
				console.log(value)
				setLoggedIn(true)
				setLoading(false)
			} else {
				console.log('No value stored')
				setLoading(false)
			}
		} catch(e) {
			console.log(e)
		}
	}
	
	return (
		<LoginContext.Provider value={{setLogin}} >
			{ isLoading === true ? <View style={{ width: '100%', height: '100%', backgroundColor: 'black' }}></View> : (loggedIn === true ? <MainContainer setLogin = { setLogin } /> : <LoginContainer />) }
		</LoginContext.Provider>
	)
};

export default App;
