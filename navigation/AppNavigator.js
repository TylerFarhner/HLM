import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'


import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import WeatherScreen from '../screens/WeatherScreen'
// TODO: FIX THESE LINKS BELOW
import AddSpotScreen from '../screens/AddSpotScreen'
import SpotDetailsScreen from '../screens/SpotDetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const HeaderLeft = () => {
    // now have access to all props from react navigation
    const navigation = useNavigation();

    return (
        <MaterialIcons name="menu" size={24} onPress={() => { navigation.openDrawer() }} />
    );
}

// ---------- PAGE NAVS --------------------

function HomeNavigator() {
    return(
        <Stack.Navigator
        >
            <Stack.Screen 
                name="Home"
                component={ HomeScreen }
                options={{ title: 'HangLoose' }}
                options={{ headerLeft: null, headerShown: false }}
            />
            <Stack.Screen 
                name="AddSpot"
                component={ AddSpotScreen }
                // options={{ title: 'Add A Spot!' }}
                options={{ headerLeft: null, headerShown: false }}
            />
            <Stack.Screen 
                name="SpotDetails"
                component={ SpotDetailsScreen }
                // options={{ title: "Details" }}
                options={{ headerLeft: null, headerShown: false }}
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
                options={{ headerLeft: null, headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function AboutNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="About" component={ AboutScreen } />
        </Stack.Navigator>
    )
}

function FavoritesNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="Favorites" component={ FavoritesScreen } />
        </Stack.Navigator>
    )
}

function ProfileNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen 
                name="Profile" 
                component={ ProfileScreen }
                options={{ title: "Profile" }}
            />
        </Stack.Navigator>
    )
}

// --------------------------------------------------------------

function DrawerNavigator() {
    return(
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ HomeNavigator }  />
                <Drawer.Screen name="About" component={ AboutScreen } />
                <Drawer.Screen name="Favorites" component={ FavoritesScreen } />
                <Drawer.Screen name="Profile" component={ ProfileNavigator } />
            </Drawer.Navigator>
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
                component={ DrawerNavigator }
                
            />
            <Tab.Screen 
                name="Weather"
                component={ WeatherNavigator }
            />
        </Tab.Navigator>
    )
}


function AppStackNavigator() {

    return(
            <Stack.Navigator
                screenOptions={{
                    headerLeft: () => <HeaderLeft />
                }}
            >

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
                    options={{ title: 'Hang Loose' }}
                    // TODO: Create HomeNavigator function and pass in here as component to allow for navigation via the home screen...
                    // ... put home screen inside the function instead of serving it here!
                />

            </Stack.Navigator>
    );

}

// DRAWER APP NAV
function AppNavigator() {
    return(
            <NavigationContainer>
                <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ AppStackNavigator }  />
                <Drawer.Screen name="About" component={ AboutNavigator } />
                <Drawer.Screen name="Favorites" component={ FavoritesNavigator } />
                <Drawer.Screen name="Profile" component={ ProfileNavigator } />
                </Drawer.Navigator>
            </NavigationContainer>
    )
}

export default AppNavigator