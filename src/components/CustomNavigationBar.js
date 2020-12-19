import {Appbar} from 'react-native-paper';
import React from 'react';

function CustomNavigationBar({navigation, previous}) {
    return (
        <Appbar.Header>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="My app" />
        </Appbar.Header>
    )
}

export default CustomNavigationBar
