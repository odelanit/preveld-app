import React from 'react'
import {View, ScrollView} from 'react-native'
import {styles} from '../styles';
import {Button, Text, Title} from 'react-native-paper';
import {connect} from 'react-redux';
import {Row, Rows, Table, TableWrapper} from 'react-native-table-component';

class ValveTrendScreen extends React.Component {
    constructor(props) {
        super(props);
        const tableData = []

        for(let i = 0; i < props.valveTrend.data.length; i++) {
            const rowData = [
                props.valveTrend.data[i].Date_of_Inspection,
                props.valveTrend.data[i].Leak_Classification,
                props.valveTrend.data[i].Leak_Rate_kgmin,
            ];
            tableData.push(rowData);
        }

        this.state = {
            tableHead: ['Month/Year', 'Leak Classification', 'Leak Rate(kg/min)'],
            tableData: tableData
        }
    }
    render() {
        const state = this.state
        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={{flex: 10, width: '100%'}}>
                    <ScrollView style={{width: '100%'}}>
                        <Title style={styles.title}>
                            {this.props.client.clientName}
                        </Title>
                        <Table borderStyle={styles.tableBorder} style={{margin: 10}}>
                            <Row data={state.tableHead} style={styles.tableHead} textStyle={styles.tableText} />
                            <TableWrapper style={styles.tableWrapper}>
                                <Rows data={state.tableData} flexArr={[1]} style={styles.tableRow} textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                    </ScrollView>
                </View>
                <View style={{flex: 1}}>
                    <Button mode="contained" onPress={() => this.props.navigation.goBack()}>Back</Button>
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
    return {
        client: state.client,
        valveTrend: state.valveTrend
    };
};

export default connect(mapStateToProps)(ValveTrendScreen)
