import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from '../styles';
import {Button, Text, Title} from 'react-native-paper';
import {connect} from 'react-redux';
import {Row, Rows, Table, TableWrapper} from 'react-native-table-component';

class WrapTrendScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rows = []

        for(let i = 0; i < this.props.wrapTrend.data.length; i++) {
            const rowData = [
                this.props.wrapTrend.data[i].Date_of_last_Inspection,
                this.props.wrapTrend.data[i].Final_Findings
            ];
            rows.push(rowData);
        }

        const tableData = {
            tableHead: ['Month/Year', 'Findings'],
            tableData: rows
        }

        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={{flex: 10, width: '100%'}}>
                    <ScrollView style={{width: '100%'}}>
                        <Title style={styles.title}>
                            {this.props.client.clientName}
                        </Title>
                        <Table borderStyle={styles.tableBorder} style={{margin: 10}}>
                            <Row data={tableData.tableHead} style={styles.tableHead} textStyle={styles.tableText} />
                            <TableWrapper style={styles.tableWrapper}>
                                <Rows data={tableData.tableData} flexArr={[1]} style={styles.tableRow} textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                    </ScrollView>
                </View>
                <View style={{flex: 1}}>
                    <Button mode="contained" onPress={() => this.props.navigation.goBack()}>Back</Button>
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
