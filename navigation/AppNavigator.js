import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import WeatherScreen from '../screens/WeatherScreen'

function HomeNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ HomeScreen }
                options={{ title: 'HangLoose' }}
            />
            <Stack.Screen 
                name="About"
                component={ AboutScreen }
            />
            <Stack.Screen 
                name="Favorites"
                component={ FavoritesScreen }
            />
        </Stack.Navigator>
    )
}

function WeatherNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Weather'
                component={ WeatherScreen }
            />
        </Stack.Navigator>
    )
}

function TabNavigator() {
    return(
        <Tab.Navigator
            // --------- ICONS -----------------
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if(route.name=="Home") {
                            iconName = "home"
                        } else if(route.name=="Weather") {
                            iconName = "brightness-7"
                        }

                        return <MaterialIcons name={iconName} size={24}/>
                    }
                })}
            // ---------- /ICONS ----------------
            >
            <Tab.Screen 
                name="Home"
                component={ HomeNavigator }
            />
            <Tab.Screen 
                name="Weather"
                component={ WeatherNavigator }
            />
        </Tab.Navigator>
    )
}

function AppNavigator() {

    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={ LoginScreen }
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Register"
                    component={ RegisterScreen }
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={ TabNavigator }
                    options={{ headerLeft: null, headerShown: false }}
                    // TODO: Create HomeNavigator function and pass in here as component to allow for navigation via the home screen...
                    // ... put home screen inside the function instead of serving it here!
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AppNavigator