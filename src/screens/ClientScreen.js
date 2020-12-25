import React from 'react'
import {View, ScrollView} from 'react-native';
import {styles} from '../styles';
import {Subheading, Text, Title, List, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {changeValveDetail, changeWrapDetail} from '../redux/actions';

class ClientScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    onValveItemClicked = (valve) => {
        this.props.changeValveDetail(valve)
        this.props.navigation.navigate('ValveDetailScreen')
    }

    onWrapItemClicked = (wrap) => {
        this.props.changeWrapDetail(wrap)
        this.props.navigation.navigate('WrapDetailScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{width: '100%'}}>
                    <Title style={styles.title}>{this.props.clientName}</Title>
                    <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
                        <View style={{width: '50%'}}>
                            <List.Section>
                                <List.Subheader>
                                    Valve
                                </List.Subheader>
                                {
                                    this.props.records.Valves && this.props.records.Valves.map((valve, index) => {
                                        return (
                                            <List.Item
                                                key={index}
                                                title={valve.Unique_ID}
                                                description={valve.Valve_description}
                                                onPress={() => this.onValveItemClicked(valve)}
                                            />
                                        )
                                    })
                                }
                            </List.Section>
                        </View>
                        <View style={{width: '50%'}}>
                            <List.Section>
                                <List.Subheader>
                                    Wrap
                                </List.Subheader>
                                {
                                    this.props.records.Wraps && this.props.records.Wraps.map((wrap, index) => {
                                        return (
                                            <List.Item
                                                key={index}
                                                title={wrap.Unique_ID}
                                                description={wrap.Wrap_No}
                                                onPress={() => this.onWrapItemClicked(wrap)}
                                            />
                                        )
                                    })
                                }
                            </List.Section>
                        </View>
                    </View>
                </ScrollView>
                <Button onPress={() => this.props.navigation.navigate('ScanScreen')} style={{width: '100%', borderRadius: 0}} mode="contained">QR Scan</Button>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.client
}

export default connect(mapStateToProps, {changeWrapDetail, changeValveDetail})(ClientScreen)
