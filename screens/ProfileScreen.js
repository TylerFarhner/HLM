import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const jwtDecode = require('jwt-decode')

export default function ProfileScreen(props) {

    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')

    const loadProfile = async () => {
        const token = await AsyncStorage.getItem('token')
        if(!token) {
            props.navigation.navigate('Login')
        }

        const decoded = jwtDecode(token)
        setFullName(decoded.fullName)
        setEmail(decoded.email)
    }
    
    const logout = props => {
        AsyncStorage.removeItem('token')
            .then(() => {
                props.navigation.navigate('Login')
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        loadProfile()
    }, [])
    
    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.text }>Welcome { fullName ? fullName: '' }</Text>
            </View>
            <View>
                <Button 
                    title="Logout"
                    onPress={() => logout(props)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 40
    },

    text: {
        fontSize: 22
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})