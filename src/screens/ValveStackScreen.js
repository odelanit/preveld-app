import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ValveDetailScreen from './ValveDetailScreen';
import ValveListScreen from './ValveListScreen';
import ValveTrendScreen from './ValveTrendScreen';
import LatestValveScreen from './LatestValveScreen';

const Stack = createStackNavigator();

class ValveStackScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"ValveListScreen"} component={ValveListScreen} />
                <Stack.Screen name={"ValveDetailScreen"} component={ValveDetailScreen} />
                <Stack.Screen name={"ValveTrendScreen"} component={ValveTrendScreen} />
                <Stack.Screen name={"LatestValveScreen"} component={LatestValveScreen} />
            </Stack.Navigator>
        );
    }
}

export default ValveStackScreen
