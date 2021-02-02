import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen(props) {

    const loadProfile = async () => {
        const token = await AsyncStorage.getItem('token')
        if(!token) {
            props.navigation.navigate('Login')
        }
        console.log(token)
    }
    
    useEffect(() => {
        loadProfile()
    })

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})