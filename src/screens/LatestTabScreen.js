import React from 'react'
import {View} from 'react-native'
import {Button, Text} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LatestValveScreen from './LatestValveScreen';
import LatestWrapScreen from './LatestWrapScreen';

const Tab = createMaterialTopTabNavigator()

class LatestTabScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Tab.Navigator>
                    <Tab.Screen
                        name={'LatestValve'}
                        component={LatestValveScreen}
                        options={{
                            tabBarLabel: 'Valve'
                        }}
                    />
                    <Tab.Screen
                        name={'LatestWrap'}
                        component={LatestWrapScreen}
                        options={{
                            tabBarLabel: 'Wrap'
                        }}
                    />
                </Tab.Navigator>
                <View style={{width: '100%'}}>
                    <Button
                        icon="qrcode-scan"
                        onPress={() => this.props.navigation.navigate('ScanScreen')}
                        style={{width: '100%', borderRadius: 0}} mode="contained"
                    >
                        QR Scan
                    </Button>
                </View>
            </View>
        );
    }
}

export default LatestTabScreen
