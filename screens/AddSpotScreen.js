import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, Alert, ActivityIndicator} from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import * as spotAction from '../redux/actions/spotAction'

const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    city: yup.string().required(),
    address: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
})

const AddSpotScreen = () => {

    const [isLoading, setIsLoading] = useState(false)

    if(isLoading) {
        return (
            <View style={ styles.centered }>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const dispatch = useDispatch()
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.select({android: undefined, ios: 'padding'})}
            keyboardVerticalOffset={100}
            style={{ flex: 1 }}
        >
            <ScrollView>

                <Formik
                    initialValues={{
                        title: '',
                        city: '',
                        address: '',
                        description: '',
                        image: '',
                    }}
                    validationSchema={ formSchema }
                    onSubmit={(values) => {
                        console.log(values)
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
                    {(props) => (
                        <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={ props.handleChange('title') }
                                onBlur={ props.handleBlur('title') }
                                value={ props.values.title }
                            />
                            <Text style={ styles.error }>{ props.touched.title && props.errors.title }</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Image URL</Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={ props.handleChange('image') }
                                onBlur={ props.handleBlur('image') }
                                value={ props.values.image }
                            />
                            <Text style={ styles.error }>{ props.touched.image && props.errors.image }</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>City</Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={ props.handleChange('city') }
                                onBlur={ props.handleBlur('city') }
                                value={ props.values.city }
                            />
                            <Text style={ styles.error }>{ props.touched.city && props.errors.city }</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={ props.handleChange('address') }
                                onBlur={ props.handleBlur('address') }
                                value={ props.values.address }
                            />
                            <Text style={ styles.error }>{ props.touched.address && props.errors.address }</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput 
                                style={styles.input}
                                multiline
                                onChangeText={ props.handleChange('description') }
                                onBlur={ props.handleBlur('description') }
                                value={ props.values.description }
                            />
                            <Text style={ styles.error }>{ props.touched.description && props.errors.description }</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Add Spot"
                                onPress={ props.handleSubmit }
                            />
                        </View>
                    </View>
                    )}
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
    },

    error: {
        color: 'red'
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default AddSpotScreen;