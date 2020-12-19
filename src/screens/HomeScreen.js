import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import ScanScreen from './ScanScreen';

const Tab = createBottomTabNavigator()

class HomeScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="HomeLogin" component={LoginScreen} />
                <Tab.Screen name="HomeScan" component={ScanScreen} />
            </Tab.Navigator>
        );
    }
}

export default HomeScreen
