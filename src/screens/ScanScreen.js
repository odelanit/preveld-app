import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setValveId, setWrapId} from '../redux/actions';

class ScanScreen extends React.Component {

    onSuccess = async (e) => {
        let latestObj = JSON.parse(e.data)
        let valveId = latestObj.valve
        let wrapId = latestObj.wrap
        // console.log(valveId)
        // console.log(wrapId)
        if (valveId) {
            this.props.setValveId(valveId)
        }
        if (wrapId) {
            this.props.setWrapId(wrapId)
        }

        const accessToken = await AsyncStorage.getItem('accessToken')
        if (accessToken) {
            if (valveId) {
                this.props.navigation.navigate("HomeDrawerScreen", {
                    screen: 'LatestTabScreen',
                    params: {
                        screen: 'LatestValve'
                    }
                })
            } else {
                if (wrapId) {
                    this.props.navigation.navigate("HomeDrawerScreen", {
                        screen: 'LatestTabScreen',
                        params: {
                            screen: 'LatestWrap'
                        }
                    })
                }
            }
        } else {
            this.props.navigation.navigate("HomeLogin")
        }
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                showMarker={true}
                reactivate={true}
            />
        );
    }
}

export default connect(null, {setWrapId, setValveId})(ScanScreen);
