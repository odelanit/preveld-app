import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from '../styles';
import {Button, Text, Title} from 'react-native-paper';
import {connect} from 'react-redux';
import {Row, Rows, Table, TableWrapper} from 'react-native-table-component';

class WrapTrendScreen extends React.Component {
    constructor(props) {
        super(props);

        const tableData = []

        for(let i = 0; i < props.wrapTrend.data.length; i++) {
            const rowData = [
                props.wrapTrend.data[i].Date_of_last_Inspection,
                props.wrapTrend.data[i].Final_Findings
            ];
            tableData.push(rowData);
        }

        this.state = {
            tableHead: ['Month/Year', 'Findings'],
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
        wrapTrend: state.wrapTrend
    };
};

export default connect(mapStateToProps)(WrapTrendScreen)
