import React from 'react';
import {
    View, Linking, Text,
    TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {styles} from '../styles';

class ScanScreen extends React.Component {

    onSuccess = (e) => {
        console.log(e.data)
        // Linking.openURL(e.data)
        //     .catch(err => {
        //         console.error(err);
        //     });
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

export default ScanScreen;
