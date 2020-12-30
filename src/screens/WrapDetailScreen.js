import React from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, IconButton, Text, Title} from 'react-native-paper';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';
import {styles} from '../styles';
import {changeWrapDetail} from '../redux/actions';

class WrapDetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    goNextRecord = () => {
        const currentIndex = this.props.wrap.index
        if (currentIndex + 1 < this.props.Wraps.length) {
            this.props.changeWrapDetail(this.props.Wraps[currentIndex + 1], currentIndex + 1);
        }
    }

    goPrevRecord = () => {
        const currentIndex = this.props.wrap.index
        if (currentIndex > 0) {
            this.props.changeWrapDetail(this.props.Wraps[currentIndex - 1], currentIndex - 1);
        }
    }

    goTrend = () => {
        console.log('pressed')
    }

    render() {
        const wrap = this.props.wrap.wrap

        const tableData = {
            tableTitle1: [
                'Wrap No.',
                'Location',
                'Client',
                'Date of Last Inspection',
                'COR No.'
            ],
            tableData1: [
                [wrap.Wrap_No],
                [wrap.Location],
                [wrap.Client],
                [wrap.Date_of_last_Inspection],
                [wrap.COR_No]
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
                [wrap.Line_No],
                [wrap.Size],
                [wrap.Status],
            ],
            tableTitle3: [
                'Preliminary Findings',
                'Final Findings After Further Analysis'
            ],
            tableData3: [
                [wrap._Priliminary_findings_on_Site],
                [wrap.Final_Findings]
            ],
            height3: [
                50,
                50,
            ],
        }

        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={{width: '100%', flex: 10, padding: 16}}>
                    <ScrollView style={{width: '100%'}}>
                        <Title style={styles.title}>{wrap.Unique_ID}</Title>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={tableData.tableTitle1} style={styles.tableTitle} heightArr={tableData.height1}
                                     textStyle={styles.tableText} />
                                <Rows data={tableData.tableData1} flexArr={[1]} style={styles.tableRow}
                                      textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={tableData.tableTitle2} style={styles.tableTitle} heightArr={tableData.height1}
                                     textStyle={styles.tableText} />
                                <Rows data={tableData.tableData2} flexArr={[1]} style={styles.tableRow}
                                      textStyle={styles.tableText} />
                            </TableWrapper>
                        </Table>
                        <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                            <TableWrapper style={styles.tableWrapper}>
                                <Col data={tableData.tableTitle3} style={styles.tableTitle} heightArr={tableData.height3}
                                     textStyle={styles.tableText} />
                                <Rows data={tableData.tableData3} flexArr={[1]} style={styles.tableRow3}
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
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        wrap: state.wrap,
        Wraps: state.client.records.Wraps
    };
};

export default connect(mapStateToProps, {changeWrapDetail})(WrapDetailScreen);
