import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FloatingAction } from 'react-native-floating-action'

import Card from '../components/Card'

const jwtDecode = require('jwt-decode')

export default function HomeScreen(props) {

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
                props.navigation.replace('Login')
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        loadProfile()
    })

    return (
        <View style={ styles.container }>
            {/* <View>
                <Text style={ styles.text }>Welcome { fullName ? fullName: '' }</Text>
            </View>
            <View>
                <Text style={ styles.text }>Your Email { email ? email: '' }</Text>
            </View> */}

            <FloatingAction 
                position="right"
                animated={ false }
                showBackground={ false }
                onPressMain={ () => props.navigation.navigate('AddSpot') }
            />

            <Card 
                navigation={ props.navigation }
            />

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
    }
})