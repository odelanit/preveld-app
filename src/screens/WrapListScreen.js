import React from 'react'
import {View, ScrollView} from 'react-native'
import {Button, List} from 'react-native-paper';
import {connect} from 'react-redux';
import {changeWrapDetail, changeWrapTrend} from '../redux/actions';
import {styles} from '../styles';
import {getWrapTrend} from '../services/api';
import Toast from 'react-native-toast-message';

class WrapListScreen extends React.Component {
    onWrapItemClicked = (wrap, index) => {
        this.props.changeWrapDetail(wrap, index);
        this.props.navigation.navigate('WrapDetailScreen');
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
            <View style={styles.container}>
                <View style={{width: '100%', flex: 1}}>
                    <ScrollView>
                        <List.Section>
                            {
                                this.props.records.Wraps && this.props.records.Wraps.map((wrap, index) => {
                                    return (
                                        <List.Item
                                            key={index}
                                            title={wrap.Unique_ID}
                                            description={wrap.Wrap_No}
                                            onPress={() => this.onWrapItemClicked(wrap, index)}
                                            titleStyle={{textAlign: 'center'}}
                                            descriptionStyle={{textAlign: 'center'}}
                                        />
                                    );
                                })
                            }
                        </List.Section>
                    </ScrollView>
                </View>
                <View style={{width: '100%', padding: 10}}>
                    <Button
                        icon="trending-up"
                        mode="outlined"
                        onPress={() => this.viewWrapTrend()}
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

export default connect(mapStateToProps, {changeWrapDetail, changeWrapTrend})(WrapListScreen)
