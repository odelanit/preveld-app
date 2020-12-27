import React from 'react'
import {View, ScrollView} from 'react-native';
import {Button, List} from 'react-native-paper';
import {connect} from 'react-redux';
import {changeValveDetail, changeValveTrend} from '../redux/actions';
import {getValveTrend} from '../services/api';
import Toast from 'react-native-toast-message';
import {styles} from '../styles';

class ValveListScreen extends React.Component {
    onValveItemClicked = (valve, index) => {
        this.props.changeValveDetail(valve, index);
        this.props.navigation.navigate('ValveDetailScreen');
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

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, width: '100%'}}>
                    <ScrollView>
                        <List.Section>
                            {
                                this.props.records.Valves && this.props.records.Valves.map((valve, index) => {
                                    return (
                                        <List.Item
                                            key={index}
                                            title={valve.Unique_ID}
                                            description={valve.Valve_description}
                                            onPress={() => this.onValveItemClicked(valve, index)}
                                            titleStyle={{textAlign: 'center'}}
                                            descriptionStyle={{textAlign: 'center'}}
                                        />
                                    );
                                })
                            }
                        </List.Section>
                    </ScrollView>
                </View>
                <View style={{padding: 10, width: '100%'}}>
                    <Button
                        icon="trending-up"
                        mode="outlined"
                        onPress={() => this.viewValveTrend()}
                    >
                        View Trend
                    </Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.client;
};

export default connect(mapStateToProps, {changeValveDetail, changeValveTrend})(ValveListScreen)
