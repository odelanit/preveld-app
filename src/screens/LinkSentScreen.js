import React from 'react'
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {styles} from '../styles';

class LinkSentScreen extends React.Component {

    handlePress = () => {
        this.props.navigation.navigate('HomeLogin')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: '80%'}}>
                    <Text style={styles.input}>
                        We have e-mailed your password reset link!
                    </Text>
                    <Button style={styles.input} mode="contained" onPress={this.handlePress}>
                        Go Home
                    </Button>
                </View>
            </View>
        )
    }
}

export default LinkSentScreen
