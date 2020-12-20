/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'
import merge from 'deepmerge'

import LoginNavigator from './screens/LoginNavigator';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LinkSentScreen from './screens/LinkSentScreen';
import HomeNavigator from './screens/HomeNavigator';

const Stack = createStackNavigator();
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)

const App: () => React$Node = () => {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="LoginNav" component={LoginNavigator} />
                    <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
                    <Stack.Screen name="LinkSent" component={LinkSentScreen} />
                    <Stack.Screen name="HomeNav" component={HomeNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
