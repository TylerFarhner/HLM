import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AboutScreen() {
    return (
        <View>
            <Text style={styles.text}>Welcome to HangLoose! Our mission is simple, create a database of all those sweet
                    hang spots you cool kids are always talking about.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    text: {
        fontSize: 20
    }

})