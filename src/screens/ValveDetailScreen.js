import React from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';

import {styles} from '../styles';
import {Button, IconButton, Title} from 'react-native-paper';
import {changeValveDetail} from '../redux/actions';

class ValveDetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    goNextRecord = () => {
        const currentIndex = this.props.valve.index
        if (currentIndex + 1 < this.props.Valves.length) {
            this.props.changeValveDetail(this.props.Valves[currentIndex + 1], currentIndex + 1);
        }
    };

    goPrevRecord = () => {
        const currentIndex = this.props.valve.index
        if (currentIndex > 0) {
            this.props.changeValveDetail(this.props.Valves[currentIndex - 1], currentIndex - 1);
        }
    };

    goTrend = () => {
        console.log('pressed');
    };

    render() {
        const valve = this.props.valve.valve

        const tableData = {
            tableTitle1: [
                'Valve tag',
                'Description',
                'Location',
                'Client',
                'Date of Last Inspection',
                'COR No',
            ],
            height1: [
                28,
                28,
                28,
                28,
                28,
            ],
            tableData1: [
                [valve.Valve_tag],
                [valve.Valve_description],
                [valve.Location],
                [valve.Client],
                [valve.Date_of_Inspection],
                [valve.COR_No],
            ],
            tableTitle2: [
                'Size',
                'Function',
                'Pup',
            ],
            tableData2: [
                [valve.Size_Inch],
                [valve.Function],
                [valve.Pressure_UP],
            ],
            tableTitle3: [
                'Type',
                'PID No',
                'Pdown',
            ],
            tableData3: [
                [valve.Type],
                [valve.PID_No],
                [valve.Pressure_Down],
            ],
            tableTitle4: [
                'Leak Condition',
            ],
            tableData4: [
                [valve.LeaK_Condition],
            ],
            tableTitle5: [
                'ASL (dB)',
                'Leak Rate (kg/min)',
                'TLT Value (kg/s)',
            ],
            height5: [
                40,
                40,
                40,
            ],
            tableData5: [
                [valve.ASL_dB],
                [valve.Leak_Rate_kgmin],
                [valve.Tolerable_Leak_Threshold_TLT],
            ],
            tableTitle6: [
                'Leak Classification',
                'Color Code',
                'Warning TLT (kg/s)',
            ],
            tableData6: [
                [valve.Leak_Classification],
                [valve.Leak_Color_Code],
                [valve.Warning_Limit_TLT],
            ],
            tableTitle7: [
                'Comment',
                'Recommended Action',
            ],
            tableData7: [
                [valve.Comment],
                [valve.Recommended_Action],
            ],
        };

        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={{width: '100%', flex: 10, padding: 16}}>
                    <ScrollView style={{width: '100%'}}>
                        {
                            this.props.valve && (
                                <>
                                    <Title style={styles.title}>{this.props.valve.valve.Unique_ID}</Title>
                                    <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                        <TableWrapper style={styles.tableWrapper}>
                                            <Col data={tableData.tableTitle1} style={styles.tableTitle}
                                                 heightArr={tableData.height1}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData1} flexArr={[1]} style={styles.tableRow}
                                                  textStyle={styles.tableText}/>
                                        </TableWrapper>
                                    </Table>
                                    <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                        <TableWrapper style={styles.tableWrapper}>
                                            <Col data={tableData.tableTitle2} style={styles.tableTitle}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData2} flexArr={[1]}
                                                  textStyle={styles.tableText} style={styles.tableRow}/>
                                            <Col data={tableData.tableTitle3} style={styles.tableTitle}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData3} flexArr={[1]} style={styles.tableRow}
                                                  textStyle={styles.tableText}/>
                                        </TableWrapper>
                                    </Table>
                                    <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                        <TableWrapper style={styles.tableWrapper}>
                                            <Col data={tableData.tableTitle4} style={styles.tableTitle}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData4} flexArr={[1]}
                                                  textStyle={styles.tableText} style={styles.tableRow}/>
                                        </TableWrapper>
                                    </Table>
                                    <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                        <TableWrapper style={styles.tableWrapper}>
                                            <Col data={tableData.tableTitle5} style={styles.tableTitle}
                                                 heightArr={tableData.height5}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData5} flexArr={[1]}
                                                  textStyle={styles.tableText} style={styles.tableRow2}/>
                                            <Col data={tableData.tableTitle6} style={styles.tableTitle}
                                                 heightArr={tableData.height5}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData6} flexArr={[1]}
                                                  textStyle={styles.tableText} style={styles.tableRow2}/>
                                        </TableWrapper>
                                    </Table>
                                    <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                        <TableWrapper style={styles.tableWrapper}>
                                            <Col data={tableData.tableTitle7} style={styles.tableTitle}
                                                 textStyle={styles.tableText}/>
                                            <Rows data={tableData.tableData7} flexArr={[1]}
                                                  textStyle={styles.tableText} style={styles.tableRow2}/>
                                        </TableWrapper>
                                    </Table>
                                </>
                            )
                        }
                    </ScrollView>
                </View>
                <View style={{width: '100%', flex: 1, padding: 16}}>
                    <View style={{flexDirection: 'row'}}>
                        <IconButton style={{flex: 1}} icon="skip-previous" onPress={this.goPrevRecord}/>
                        <Button mode="outlined" style={{alignSelf: 'center'}} onPress={this.goTrend}>View Trend</Button>
                        <IconButton style={{flex: 1}} icon="skip-next" onPress={this.goNextRecord}/>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        valve: state.valve,
        Valves: state.client.records.Valves
    };
};

export default connect(mapStateToProps, {changeValveDetail})(ValveDetailScreen);
