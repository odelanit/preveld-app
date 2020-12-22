import React from 'react'
import {View} from 'react-native';
import {styles} from '../styles';
import {Text} from 'react-native-paper';
import {connect} from 'react-redux';
// import {EventRegister} from 'react-native-event-listeners';

class ClientScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props.client)}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.client
}

export default connect(mapStateToProps)(ClientScreen)
