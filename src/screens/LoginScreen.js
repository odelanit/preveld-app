import React from "react"
import {View, Pressable, Image} from 'react-native'
import {ActivityIndicator, Button, Subheading, Text, TextInput, Title} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {styles} from '../styles';
import {postLogin} from '../services/api';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        }
    }

    handleLogin = () => {
        this.setState({
            isLoading: true
        })
        postLogin(this.state.username, this.state.password)
            .then(data => {
                if (data.data) {
                    AsyncStorage.setItem('authToken', data.data);
                    this.props.navigation.navigate('HomeNav')
                    this.setState({
                        username: '',
                        password: ''
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: data.Message,
                    })
                }
                this.setState({
                    isLoading: false
                })
            });
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
                    <View style={styles.logo}>
                        <Image source={require('../assets/logo.png')} />
                    </View>
                    <Title style={styles.title}>
                        Welcome to IDE@S
                    </Title>
                    <Subheading style={styles.subtitle}>
                        Inspection Database and Equipment Information System
                    </Subheading>
                    <TextInput
                        label="Username"
                        style={styles.input}
                        mode="outlined"
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}
                    />
                    <TextInput
                        label="Password"
                        style={styles.input}
                        secureTextEntry={true}
                        mode='outlined'
                        value={this.state.password}
                        onChangeText={text => this.setState({password: text})}
                    />
                    <Button
                        mode="contained"
                        style={styles.input}
                        onPress={this.handleLogin}
                    >
                        Login
                    </Button>
                    <Pressable
                        style={styles.input}
                        onPress={() => this.props.navigation.navigate('Forgot')}
                    >
                        {({pressed}) => (
                            <Text style={{textAlign: 'right', color: pressed ? 'white' : 'black'}}>Forgot Password?</Text>
                        )}
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default LoginScreen
