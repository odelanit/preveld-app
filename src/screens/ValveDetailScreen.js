import React from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';

import {styles} from '../styles';
import {Title} from 'react-native-paper';

class ValveDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableTitle1: [
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
                28
            ],
            tableData1: [
                [props.valve.Valve_description],
                [props.valve.Location],
                [props.valve.Client],
                [props.valve.Date_of_Inspection],
                [props.valve.COR_No],
            ],
            tableTitle2: [
                'Size',
                'Function',
                'Pup'
            ],
            tableData2: [
                [props.valve.Size_Inch],
                [props.valve.Location],
                [props.valve.Pressure_UP],
            ],
            tableTitle3: [
                'Type',
                'PID No',
                'Pdown'
            ],
            tableData3: [
                [props.valve.Type],
                [props.valve.PID_No],
                [props.valve.Pressure_Down],
            ],
            tableTitle4: [
                'Leak Condition',
            ],
            tableData4: [
                [props.valve.LeaK_Condition]
            ],
            tableTitle5: [
                'ASL (dB)',
                'Leak Rate (kg/min)',
                'TLT Value (kg/s)'
            ],
            height5: [
                40,
                40,
                40
            ],
            tableData5: [
                [props.valve.ASL_dB],
                [props.valve.Leak_Rate_kgmin],
                [props.valve.Tolerable_Leak_Threshold_TLT],
            ],
            tableTitle6: [
                'Leak Classification',
                'Color Code',
                'Warning TLT (kg/s)'
            ],
            tableData6: [
                [props.valve.Leak_Classification],
                [props.valve.Leak_Color_Code],
                [props.valve.Warning_Limit_TLT]
            ],
            tableTitle7: [
                'Comment',
                'Recommended Action'
            ],
            tableData7: [
                [props.valve.Comment],
                [props.valve.Recommended_Action]
            ]
        };

    }

    render() {
        const state = this.state;
        return (
            <View style={[styles.container, {padding: 16}]}>
                <ScrollView style={{width: '100%'}}>
                    {
                        this.props.valve && (
                            <>
                                <Title style={styles.title}>{this.props.valve.Unique_ID}</Title>
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
                                        <Col data={state.tableTitle2} style={styles.tableTitle}
                                             textStyle={styles.tableText}/>
                                        <Rows data={state.tableData2} flexArr={[1]}
                                              textStyle={styles.tableText} style={styles.tableRow}/>
                                        <Col data={state.tableTitle3} style={styles.tableTitle}
                                             textStyle={styles.tableText}/>
                                        <Rows data={state.tableData3} flexArr={[1]} style={styles.tableRow}
                                              textStyle={styles.tableText}/>
                                    </TableWrapper>
                                </Table>
                                <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                    <TableWrapper style={styles.tableWrapper}>
                                        <Col data={state.tableTitle4} style={styles.tableTitle}
                                             textStyle={styles.tableText} />
                                        <Rows data={state.tableData4} flexArr={[1]}
                                              textStyle={styles.tableText} style={styles.tableRow} />
                                    </TableWrapper>
                                </Table>
                                <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                    <TableWrapper style={styles.tableWrapper}>
                                        <Col data={state.tableTitle5} style={styles.tableTitle} heightArr={this.state.height5}
                                             textStyle={styles.tableText} />
                                        <Rows data={state.tableData5} flexArr={[1]}
                                              textStyle={styles.tableText} style={styles.tableRow2} />
                                        <Col data={state.tableTitle6} style={styles.tableTitle} heightArr={this.state.height5}
                                             textStyle={styles.tableText} />
                                        <Rows data={state.tableData6} flexArr={[1]}
                                              textStyle={styles.tableText} style={styles.tableRow2} />
                                    </TableWrapper>
                                </Table>
                                <Table style={styles.table} borderStyle={{borderWidth: 1}}>
                                    <TableWrapper style={styles.tableWrapper}>
                                        <Col data={state.tableTitle7} style={styles.tableTitle}
                                             textStyle={styles.tableText} />
                                        <Rows data={state.tableData7} flexArr={[1]}
                                              textStyle={styles.tableText} style={styles.tableRow2} />
                                    </TableWrapper>
                                </Table>
                            </>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state.valve;
};

export default connect(mapStateToProps)(ValveDetailScreen);
