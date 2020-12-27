import React from 'react'
import {Pressable, View} from 'react-native';
import {ActivityIndicator, Button, Text, TextInput, Title} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {styles} from '../styles';
import {sendPasswordResetLink} from '../services/api';

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = (value) => {
        this.setState({
            email: value,
            isLoading: false
        })
    }

    handlePress = () =>  {
        this.setState({
            isLoading: true
        })
        sendPasswordResetLink(this.state.email)
            .then(data => {
                if (data.data) {
                    this.props.navigation.navigate('LinkSentScreen')
                } else {
                    Toast.show({
                        type: 'error',
                        text1: data.Message,
                    })
                }
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            )
        }
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
                    <Pressable
                        style={styles.input}
                        onPress={() => this.props.navigation.navigate('HomeLogin')}
                    >
                        {({pressed}) => (
                            <Text style={{textAlign: 'right', color: pressed ? 'white' : 'black'}}>Login</Text>
                        )}
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default ForgotPasswordScreen
