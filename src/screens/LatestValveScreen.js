import React from 'react'
import {ScrollView, View} from 'react-native';
import {Button, IconButton, Text, Title} from 'react-native-paper';
import {styles} from '../styles';
import {connect} from 'react-redux';
import {getValve} from '../services/api';
import Toast from 'react-native-toast-message';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';
import {changeValveDetail} from '../redux/actions';

class LatestValveScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valve: null
        }
    }
    componentDidMount() {
        if (this.props.valveId != -1) {
            this.getLatestValve()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.valveId !== this.props.valveId) {
            if (this.props.valveId != -1) {
                this.getLatestValve()
            }
        }
    }

    getLatestValve = () => {
        getValve(this.props.valveId)
            .then(res => {
                if (res.data) {
                    this.setState({
                        valve: res.data
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: res.Message
                    })
                }
            })
    }

    render() {
        if (!this.state.valve) {
            return (
                <View style={styles.container}>
                    <Text>No latest</Text>
                </View>
            );
        } else {
            const valve = this.state.valve
            const tableData = {
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
                    28,
                ],
                tableData1: [
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
                    [valve.Location],
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
                            <Title style={styles.title}>{valve.Unique_ID}</Title>
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
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const mapStateToProps = state => {
    return state.latest;
};

export default connect(mapStateToProps, {changeValveDetail})(LatestValveScreen)
