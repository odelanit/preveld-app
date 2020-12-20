import React from 'react'
import {View, Image} from 'react-native';
import {styles} from '../styles';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} />
            </View>
        );
    }
}

export default HomeScreen
