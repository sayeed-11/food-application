import { View, Text } from 'react-native'
import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import WelcomeScreen from './WelcomeScreen';
import RecipeDetails from './RecipeDetails';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Settings from './Settings';
import HelpAndSupport from '../Help&Support';
import Favourite from '../Favourite';
import LogInForm from './Forms/LogInForm';
import SignUpForm from './Forms/SignUpForm';
import PasswordRecover from './Forms/PasswordRecover';
import OTPsection from './Forms/OTPsection';
import ResetPassword from './Forms/ResetPassword'

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const NavigationScreen = () => {
    return (
        <GestureHandlerRootView style={{
            flex: 1
        }}>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="RecipeDetails" options={{ headerShown: false }} component={RecipeDetails} />
                <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
                <Stack.Screen name="EditProfile" options={{ headerShown: false }} component={EditProfile} />
                <Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
                <Stack.Screen name="HelpAndSupport" options={{ headerShown: false }} component={HelpAndSupport} />
                <Stack.Screen name="Favourite" options={{ headerShown: false }} component={Favourite} />
                <Stack.Screen name="LogInForm" options={{ headerShown: false }} component={LogInForm} />
                <Stack.Screen name="SignUpForm" options={{ headerShown: false }} component={SignUpForm} />
                <Stack.Screen name="PasswordRecover" options={{ headerShown: false }} component={PasswordRecover} />
                <Stack.Screen name="OTPsection" options={{ headerShown: false }} component={OTPsection} />
                <Stack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPassword} />
            </Stack.Navigator>
        </GestureHandlerRootView>
    )
}

export default NavigationScreen