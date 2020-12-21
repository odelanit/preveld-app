import React from "react"
import {View, Pressable, Image} from 'react-native'
import {Button, Subheading, Text, TextInput, Title} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../styles';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
    }

    postLogin = async (username, password) => {
        try {
            let response = await fetch('http://192.168.1.38:8080/api/Auth/Login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            let json = await response.json();
            return json.data;
        } catch (error) {
            console.error(error);
        }
    }

    handleLogin = () => {
        this.postLogin(this.state.username, this.state.password)
            .then(token => {
                if (token) {
                    AsyncStorage.setItem('authToken', token);
                    this.props.navigation.navigate('HomeNav')
                    this.setState({
                        username: '',
                        password: ''
                    })
                }
            });
    }

    render() {
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
