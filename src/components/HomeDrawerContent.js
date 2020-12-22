import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {Button, Drawer} from 'react-native-paper';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux';

import {styles} from '../styles';
import {getClientRecords, getClients} from '../services/api';
import {changeClientData, changeClientName} from '../redux/actions';

class HomeDrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        getClients()
            .then(res => {
                if (res.data) {
                    this.setState({
                        clients: res.data,
                    });
                }
            });
    }

    handleLogout = () => {
        AsyncStorage.removeItem('accessToken');
        this.props.navigation.navigate('HomeLogin');
    };

    onItemClicked = (client) => {
        getClientRecords(client.Name)
            .then(res => {
                if (res.data) {
                    this.props.changeClientName(client.Name)
                    this.props.changeClientData(res.data);
                }
            });
        this.props.navigation.navigate('ClientScreen');
    };

    onHomeClicked = () => {
        let homeFocused = this.props.state.index == 0;
        if (homeFocused) {
            this.props.navigation.closeDrawer();
        } else {
            this.props.navigation.navigate('HomeScreen');
        }
    };

    render() {

        return (
            <DrawerContentScrollView {...this.props}>
                <DrawerItem
                    label="Home"
                    onPress={() => {
                        this.onHomeClicked();
                    }}
                    icon={({focused, size, color}) => (
                        <Ionicons name="md-home" size={size} color={color}/>
                    )}
                />
                <Drawer.Section title="View Clients">
                    {
                        this.state.clients.map((client, index) => {
                            return (
                                <Drawer.Item
                                    key={index}
                                    icon={({size, color}) => (
                                        <Octicons name="primitive-dot" size={size} color={color}/>
                                    )}
                                    label={client.Name}
                                    onPress={() => {
                                        this.onItemClicked(client);
                                    }}
                                />
                            );
                        })
                    }
                </Drawer.Section>
                <View style={styles.input}>
                    <Button mode="contained" onPress={this.handleLogout}>
                        Logout
                    </Button>
                </View>
            </DrawerContentScrollView>
        );
    }
}

export default connect(null, {changeClientData, changeClientName})(HomeDrawerContent);
