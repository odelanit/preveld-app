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
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'
import merge from 'deepmerge'

import HomeScreen from './screens/HomeScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

const Stack = createStackNavigator();
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme)

const App: () => React$Node = () => {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <Stack.Navigator screenOptions={{headerShown: true, header: (props) => <CustomNavigationBar {...props} />}}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
