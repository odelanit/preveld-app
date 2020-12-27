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
import Toast from 'react-native-toast-message';
import merge from 'deepmerge'

import LoginTabScreen from './screens/LoginTabScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LinkSentScreen from './screens/LinkSentScreen';
import HomeDrawerScreen from './screens/HomeDrawerScreen';

const Stack = createStackNavigator();
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)

const App: () => React$Node = () => {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="LoginTabScreen" component={LoginTabScreen} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                    <Stack.Screen name="LinkSentScreen" component={LinkSentScreen} />
                    <Stack.Screen name="HomeDrawerScreen" component={HomeDrawerScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </PaperProvider>
    );
};

export default App;
