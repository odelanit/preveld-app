import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';

const Drawer = createDrawerNavigator();

class HomeNavigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                screenOptions={{headerShown: true}}
                drawerContent={(props) => <HomeDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
        );
    }
}

export default HomeNavigator
