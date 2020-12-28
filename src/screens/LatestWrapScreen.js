import React from 'react'
import {ScrollView, View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {styles} from '../styles';
import {connect} from 'react-redux';
import {getWrap} from '../services/api';
import Toast from 'react-native-toast-message';
import {Col, Rows, Table, TableWrapper} from 'react-native-table-component';

class LatestWrapScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wrap: null
        }
    }
    componentDidMount() {
        if (this.props.wrapId != -1) {
            this.getLatestWrap()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.wrapId !== this.props.wrapId) {
            if (this.props.wrapId != -1) {
                this.getLatestWrap()
            }
        }
    }

    getLatestWrap = () => {
        getWrap(this.props.wrapId)
            .then(res => {
                if (res.data) {
                    this.setState({
                        wrap: res.data
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
        if (!this.state.wrap) {
            return (
                <View style={styles.container}>
                    <Text>
                        No latest
                    </Text>
                </View>
            );
        } else {
            const wrap = this.state.wrap

            const tableData = {
                tableTitle1: [
                    'Location',
                    'Client',
                    'Date of Last Inspection',
                    'COR No.'
                ],
                tableData1: [
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
                </View>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.latest;
};

export default connect(mapStateToProps)(LatestWrapScreen)
