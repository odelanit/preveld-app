import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../styles';

class HomeDrawerContent extends React.Component {
    handleLogout = () => {
        AsyncStorage.removeItem('authToken');
        this.props.navigation.navigate('HomeLogin')
    }

    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <DrawerItemList {...this.props} />
                <View style={styles.input}>
                    <Button mode="contained" onPress={this.handleLogout}>
                        Logout
                    </Button>
                </View>
            </DrawerContentScrollView>
        )
    }
}

export default HomeDrawerContent
