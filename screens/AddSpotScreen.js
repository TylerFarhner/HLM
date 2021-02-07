import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'

import * as spotAction from '../redux/actions/spotAction'

const AddSpotScreen = () => {

    const dispatch = useDispatch()
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.select({android: undefined, ios: 'padding'})}
            keyboardVerticalOffset={ 100 }
        >

            <ScrollView>

            <Formik
                    initialValues={{
                        title: '',
                        image: '',
                        address: '',
                        city: '',
                        description: ''
                    }}
                    validationSchema={ formSchema }
                    onSubmit={(values) => {
                        // console.log(values)
                        setIsLoading(true)
                        dispatch(spotAction.createSpot(values))
                            .then(() => {
                                setIsLoading(false)
                                Alert.alert('Created Successfully')
                            })
                            .catch(() => {
                                setIsLoading(false)
                                Alert.alert('Error, Try Again.', [{text: 'OK'}])
                            }
                            )
                    }}
                >
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput 
                                style={styles.input}
                            />
                        </View>
                        
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>City</Text>
                            <TextInput 
                                style={styles.input}
                                multiline
                            />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput 
                                style={styles.input}
                                multiline
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput 
                                style={styles.input}
                                multiline
                            />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Image URL</Text>
                            <TextInput 
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Add Hammock Spot"
                            />
                        </View>
                    </View>
                </Formik>
                
            </ScrollView>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10
    },
    formGroup: {
        width: '100%'
    },
    label: {
        marginVertical: 10
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    buttonContainer: {
        marginTop: 20
    }
});

export default AddSpotScreen;