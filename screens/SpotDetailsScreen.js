import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

const SpotDetailsScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.title}>Lake Washington</Text>
                </View>
                <View>
                    <Image source={require('../assets/images/cardPhoto.jpg')} style={styles.image} />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>City: </Text>
                    <Text style={styles.value}>Seattle, WA</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Address: </Text>
                    <Text style={styles.value}>yo mamys house</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Description: </Text>
                    <Text style={styles.value}>Easy-access location on Lake Washington</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
        },
        heading: {
        marginHorizontal: 20,
        marginBottom: 10
        },
        title: {
        fontSize: 24
        },
        image: {
        width: '100%',
        height: 200
        },
        group: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
        },
        label: {
        fontSize: 18
        },
        value: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1
        }
});

export default SpotDetailsScreen;