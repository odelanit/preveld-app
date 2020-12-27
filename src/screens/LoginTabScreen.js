import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import ScanScreen from './ScanScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

class LoginTabScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator
            >
                <Tab.Screen
                    name="HomeLogin"
                    component={LoginScreen}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="HomeScan"
                    component={ScanScreen}
                    options={{
                        tabBarLabel: 'QR Scan',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default LoginTabScreen
