import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FavoritesScreen() {
    return (
        <View>
            <Text style={styles.text}>
                Favorites Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})