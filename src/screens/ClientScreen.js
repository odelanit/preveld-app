import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from '../styles';
import {Title, List, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {changeValveDetail, changeValveTrend, changeWrapDetail, changeWrapTrend} from '../redux/actions';
import {getValveTrend, getWrapTrend} from '../services/api';
import Toast from 'react-native-toast-message';

class ClientScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    onValveItemClicked = (valve, index) => {
        this.props.changeValveDetail(valve, index);
        this.props.navigation.navigate('ValveDetailScreen');
    };

    onWrapItemClicked = (wrap, index) => {
        this.props.changeWrapDetail(wrap, index);
        this.props.navigation.navigate('WrapDetailScreen');
    };

    viewValveTrend = () => {
        getValveTrend(this.props.clientName)
            .then(res => {
                if (res.data) {
                    this.props.changeValveTrend(res.data)
                    this.props.navigation.navigate('ValveTrendScreen');
                } else {
                    Toast.show({
                        type: 'error',
                        text1: res.Message,
                    })
                }
            })
    };

    viewWrapTrend = () => {
        getWrapTrend(this.props.clientName)
            .then(res => {
                if (res.data) {
                    this.props.changeWrapTrend(res.data)
                    this.props.navigation.navigate('WrapTrendScreen');
                } else {
                    Toast.show({
                        type: 'error',
                        text1: res.Message
                    })
                }
            })
    };

    render() {
        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <ScrollView style={{width: '100%', height: '75%'}}>
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
                                                onPress={() => this.onValveItemClicked(valve, index)}
                                            />
                                        );
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
                                                onPress={() => this.onWrapItemClicked(wrap, index)}
                                            />
                                        );
                                    })
                                }
                            </List.Section>
                        </View>
                    </View>
                </ScrollView>
                <View style={{flex: 1, flexDirection: 'row', height: 'auto'}}>
                    <View style={{width: '50%', padding: 3}}>
                        <Button
                            icon="trending-up"
                            mode="contained"
                            onPress={() => this.viewValveTrend()}
                        >
                            View Trend
                        </Button>
                    </View>
                    <View style={{width: '50%', padding: 3}}>
                        <Button
                            icon="trending-up"
                            mode="contained"
                            onPress={() => this.viewWrapTrend()}
                        >
                            View Trend
                        </Button>
                    </View>
                </View>
                <View style={{width: '100%', height: 'auto'}}>
                    <Button icon="qrcode-scan" onPress={() => this.props.navigation.navigate('ScanScreen')}
                            style={{width: '100%', borderRadius: 0}} mode="contained">QR Scan</Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.client;
};

export default connect(mapStateToProps, {
    changeWrapDetail,
    changeValveDetail,
    changeWrapTrend,
    changeValveTrend,
})(ClientScreen);
