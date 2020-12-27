import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import WrapDetailScreen from './WrapDetailScreen';
import WrapListScreen from './WrapListScreen';
import WrapTrendScreen from './WrapTrendScreen';
import LatestWrapScreen from './LatestWrapScreen';

const Stack = createStackNavigator()

class WrapStackScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"WrapListScreen"} component={WrapListScreen} />
                <Stack.Screen name={"WrapDetailScreen"} component={WrapDetailScreen} />
                <Stack.Screen name={"WrapTrendScreen"} component={WrapTrendScreen} />
                <Stack.Screen name={"LatestWrapScreen"} component={LatestWrapScreen} />
            </Stack.Navigator>
        );
    }
}

export default WrapStackScreen
