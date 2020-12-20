import React from "react"
import {View, Pressable, Image} from 'react-native'
import {Button, Subheading, Text, TextInput, Title} from 'react-native-paper';
import {styles} from '../styles';

class LoginScreen extends React.Component {
    handleLogin = () => {
        this.props.navigation.navigate('HomeNav')
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
                    />
                    <TextInput
                        label="Password"
                        style={styles.input}
                        secureTextEntry={true}
                        mode='outlined'
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
