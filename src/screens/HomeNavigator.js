import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';
import ClientScreen from './ClientScreen';
import ScanScreen from './ScanScreen';
import WrapDetailScreen from './WrapDetailScreen';
import ValveDetailScreen from './ValveDetailScreen';

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
                        tableTitle: 'Welcome to Preveld App'
                    }}
                />
                <Drawer.Screen
                    name="ClientScreen"
                    component={ClientScreen}
                    options={{
                        tableTitle: 'Client'
                    }}
                />
                <Drawer.Screen
                    name="ScanScreen"
                    component={ScanScreen}
                    options={{
                        tableTitle: 'QR Scan'
                    }}
                />
                <Drawer.Screen
                    name="WrapDetailScreen"
                    component={WrapDetailScreen}
                    options={{
                        tableTitle: 'Wrap Detail'
                    }}
                />
                <Drawer.Screen
                    name="ValveDetailScreen"
                    component={ValveDetailScreen}
                    options={{
                        tableTitle: 'Valve Detail'
                    }}
                />
            </Drawer.Navigator>
        );
    }
}

export default HomeNavigator;
