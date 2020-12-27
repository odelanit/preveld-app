import React from 'react';
import {View} from 'react-native';
import {Button, Text, Title} from 'react-native-paper';
import {styles} from '../styles';
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ValveStackScreen from './ValveStackScreen';
import WrapStackScreen from './WrapStackScreen';

const Tab = createMaterialTopTabNavigator();

class ClientTabScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View>
                    <Title style={styles.title}>{this.props.clientName}</Title>
                </View>
                <Tab.Navigator>
                    <Tab.Screen name={'Valve'} component={ValveStackScreen} />
                    <Tab.Screen name={'Wrap'} component={WrapStackScreen} />
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

const mapStateToProps = state => {
    return state.client;
};

export default connect(mapStateToProps)(ClientTabScreen);
