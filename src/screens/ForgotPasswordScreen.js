import React from 'react'
import {View} from 'react-native'
import {Button, Text, TextInput, Title} from 'react-native-paper';
import {styles} from '../styles';

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = (value) => {
        this.setState({
            email: value
        })
    }

    handlePress = () =>  {
        this.props.navigation.navigate('LinkSent')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: '80%'}}>
                    <Title style={styles.title}>
                        Reset Password
                    </Title>
                    <TextInput
                        label="Email"
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={this.handleChange}
                        mode="outlined"
                    />
                    <Button
                        style={styles.input}
                        mode="contained"
                        onPress={this.handlePress}
                    >
                        Send Password Reset Link
                    </Button>
                </View>
            </View>
        );
    }
}

export default ForgotPasswordScreen
