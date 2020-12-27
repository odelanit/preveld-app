import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';
import ScanScreen from './ScanScreen';
import ClientTabScreen from './ClientTabScreen';
import LatestTabScreen from './LatestTabScreen';

const Drawer = createDrawerNavigator();

class HomeDrawerScreen extends React.Component {
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
                    name="LatestTabScreen"
                    component={LatestTabScreen}
                    options={{
                        headerTitle: 'Latest Report'
                    }}
                />
                <Drawer.Screen
                    name="ClientScreen"
                    component={ClientTabScreen}
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
            </Drawer.Navigator>
        );
    }
}

export default HomeDrawerScreen;
