import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ValveDetailScreen from './ValveDetailScreen';
import ValveListScreen from './ValveListScreen';
import ValveTrendScreen from './ValveTrendScreen';

const Stack = createStackNavigator();

class ValveStackScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"ValveListScreen"} component={ValveListScreen} />
                <Stack.Screen name={"ValveDetailScreen"} component={ValveDetailScreen} />
                <Stack.Screen name={"ValveTrendScreen"} component={ValveTrendScreen} />
            </Stack.Navigator>
        );
    }
}

export default ValveStackScreen
