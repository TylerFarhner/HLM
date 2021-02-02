import React from 'react'
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Text, StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'

export default function RegisterScreen(navData) {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        password: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {(props) => (
                        <View style={ styles.container } >
                            <View style={ styles.logo }>
                                <Image source={require('../assets/images/logo.png')} style={ styles.image } />
                            </View>
                            <View>
                                <TextInput 
                                    style={ styles.inputBox } 
                                    placeholder="Full Name"
                                    placeholderTextColor="#fff"
                                    onChangeText={props.handleChange('fullName')}
                                    value={props.values.fullName}
                                />
                                <TextInput 
                                    style={ styles.inputBox } 
                                    placeholder="Email"
                                    placeholderTextColor="#fff"
                                    keyboardType="email-address"
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                                <TextInput 
                                    style={ styles.inputBox } 
                                    placeholder="Password"
                                    placeholderTextColor="#fff"
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <TouchableOpacity 
                                style={ styles.button }
                                onPress={props.handleSubmit}
                                >
                                    <Text style={ styles.buttonText }>Register</Text>
                                </TouchableOpacity>
                                <View style={ styles.registerContainer }>
                                    <Text style={ styles.registerText }>Have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navData.navigation.navigate('Login')}
                                    >
                                        <Text style={ styles.registerButton }>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}

                </Formik>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    logo: {
        alignItems: 'center',
        marginBottom: 40
    },

    image:{
        width: 100,
        height: 100
    },

    inputBox: {
        width: 300,
        backgroundColor: '#B6BFC4',
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10
    },

    button: {
        width: 300,
        backgroundColor: '#738289',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    registerContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: "row"
    },

    registerText: {
        color: '#738289',
        fontSize: 16
    },

    registerButton: {
        color: '#738289',
        fontSize: 16,
        fontWeight: 'bold'
    }

})