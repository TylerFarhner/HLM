import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import { useSelector } from 'react-redux'

const SpotDetailsScreen = (props) => {

    const { spotId } = props.route.params

    const spot = useSelector(state => state.spot.spots.find(spot => spot._id == spotId))

    console.log(spot)
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.title}>{spot.title}</Text>
                </View>
                <View>
                    <Image source={{ uri: spot.image }} style={styles.image} />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>City: </Text>
                    <Text style={styles.value}>{ spot.city }</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Address: </Text>
                    <Text style={styles.value}>{ spot.address }</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Description: </Text>
                    <Text style={styles.value}>{ spot.description }</Text>
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