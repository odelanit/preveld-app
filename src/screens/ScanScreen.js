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
        this.props.setValveId(valveId)
        this.props.setWrapId(wrapId)
        const accessToken = await AsyncStorage.getItem('accessToken')
        if (accessToken) {
            this.props.navigation.navigate("HomeDrawerScreen", {
                screen: 'LatestTabScreen'
            })
        } else {
            this.props.navigation.navigate("HomeLogin")
        }
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                showMarker={true}
                flashMode={RNCamera.Constants.FlashMode.torch}
            />
        );
    }
}

export default connect(null, {setWrapId, setValveId})(ScanScreen);
