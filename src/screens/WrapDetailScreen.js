import React from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, IconButton, Text, Title} from 'react-native-paper';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';
import {styles} from '../styles';

class WrapDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableTitle1: [
                'Location',
                'Client',
                'Date of Last Inspection',
                'COR No.'
            ],
            tableData1: [
                [props.wrap.Location],
                [props.wrap.Client],
                [props.wrap.Date_of_last_inspection],
                [props.wrap.COR_No]
            ],
            height1: [
                28,
                28,
                28,
                28
            ],
            tableTitle2: [
                'Line No.',
                'Size',
                'Status'
            ],
            tableData2: [
                [props.wrap.Line_No],
                [props.wrap.Size],
                [props.wrap.Status],
            ],
            tableTitle3: [
                'Preliminary Findings',
                'Final Findings After Further Analysis'
            ],
            tableData3: [
                [props.wrap._Priliminary_findings_on_Site],
                [props.wrap.Final_Findings]
            ],
            height3: [
                50,
                50,
            ],
        }
    }

    goNextRecord = () => {
        console.log('pressed')
    }

    goPrevRecord = () => {
        console.log('pressed')
    }

    goTrend = () => {
        console.log('pressed')
    }

    render() {
        const state = this.state;
        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={{width: '100%', flex: 10, padding: 16}}>
                    <ScrollView style={{width: '100%'}}>
                        <Title style={styles.title}>{this.props.wrap.Unique_ID}</Title>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={state.tableTitle1} style={styles.tableTitle} heightArr={this.state.height1}
                                     textStyle={styles.tableText} />
                                <Rows data={state.tableData1} flexArr={[1]} style={styles.tableRow}
                                      textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={state.tableTitle2} style={styles.tableTitle} heightArr={this.state.height1}
                                     textStyle={styles.tableText} />
                                <Rows data={state.tableData2} flexArr={[1]} style={styles.tableRow}
                                      textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={state.tableTitle3} style={styles.tableTitle} heightArr={this.state.height3}
                                     textStyle={styles.tableText} />
                                <Rows data={state.tableData3} flexArr={[1]} style={styles.tableRow3}
                                      textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                    </ScrollView>
                </View>
                <View style={{width: '100%', flex: 1, padding: 16}}>
                    <View style={{flexDirection: 'row'}}>
                        <IconButton style={{flex: 1}} icon="skip-previous" onPress={this.goPrevRecord} />
                        <Button mode="outlined" style={{alignSelf: 'center'}} onPress={this.goTrend}>View Trend</Button>
                        <IconButton style={{flex: 1}} icon="skip-next" onPress={this.goNextRecord} />
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
    return state.wrap;
};

export default connect(mapStateToProps)(WrapDetailScreen);
