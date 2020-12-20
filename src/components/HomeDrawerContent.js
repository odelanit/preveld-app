import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from '../styles';

class HomeDrawerContent extends React.Component {
    handleLogout = () => {
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
