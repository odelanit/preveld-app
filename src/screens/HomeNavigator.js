import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';
import ClientScreen from './ClientScreen';

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
                        title: 'Welcome to Preveld App'
                    }}
                />
                <Drawer.Screen
                    name="ClientScreen"
                    component={ClientScreen}
                    options={{
                        title: 'Client'
                    }}
                />
            </Drawer.Navigator>
        );
    }
}

export default HomeNavigator;
