import React from 'react'
import {View, ScrollView} from 'react-native';
import {styles} from '../styles';
import {Subheading, Text, Title, List} from 'react-native-paper';
import {connect} from 'react-redux';

class ClientScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{width: '100%'}}>
                    <Title style={styles.title}>{this.props.clientName}</Title>
                    <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
                        <View style={{width: '50%'}}>
                            <Subheading>
                                Valve
                            </Subheading>
                            {
                                this.props.records.Valves.map((valve, index) => {
                                    return (
                                        <List.Item
                                            title={valve.Unique_ID}
                                            description={valve.Valve_description}
                                        />
                                    )
                                })
                            }
                        </View>
                        <View style={{width: '50%'}}>
                            <Subheading>
                                Wrap
                            </Subheading>
                            {
                                this.props.records.Wraps.map((wrap, index) => {
                                    return (
                                        <List.Item
                                            title={wrap.Unique_ID}
                                            description={wrap.Wrap_No}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.client
}

export default connect(mapStateToProps)(ClientScreen)
