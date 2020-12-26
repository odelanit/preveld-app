import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';
import ClientScreen from './ClientScreen';
import ScanScreen from './ScanScreen';
import WrapDetailScreen from './WrapDetailScreen';
import ValveDetailScreen from './ValveDetailScreen';
import ValveTrendScreen from './ValveTrendScreen';
import WrapTrendScreen from './WrapTrendScreen';

const Drawer = createDrawerNavigator();

class HomeNavigator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer.Navigator
                screenOptions={{headerShown: true}}
                drawerContent={(props) => <HomeDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'Welcome to Preveld App'
                    }}
                />
                <Drawer.Screen
                    name="ClientScreen"
                    component={ClientScreen}
                    options={{
                        headerTitle: 'Client'
                    }}
                />
                <Drawer.Screen
                    name="ScanScreen"
                    component={ScanScreen}
                    options={{
                        headerTitle: 'QR Scan'
                    }}
                />
                <Drawer.Screen
                    name="WrapDetailScreen"
                    component={WrapDetailScreen}
                    options={{
                        headerTitle: 'Wrap Detail'
                    }}
                />
                <Drawer.Screen
                    name="ValveDetailScreen"
                    component={ValveDetailScreen}
                    options={{
                        headerTitle: 'Valve Detail'
                    }}
                />
                <Drawer.Screen
                    name="ValveTrendScreen"
                    component={ValveTrendScreen}
                    options={{
                        headerTitle: 'Valve Trend'
                    }}
                />
                <Drawer.Screen
                    name="WrapTrendScreen"
                    component={WrapTrendScreen}
                    options={{
                        headerTitle: 'Wrap Trend'
                    }}
                />
            </Drawer.Navigator>
        );
    }
}

export default HomeNavigator;
