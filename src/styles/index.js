import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        padding: 10
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
    },
    logo: {
        margin: 10,
        alignItems: 'center',
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    tableBorder: {
        borderStyle: 'solid',
        borderWidth: 1
    },
    tableHead: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    tableWrapper: {
        flexDirection: 'row'
    },
    tableTitle: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    tableRow: {
        height: 28
    },
    tableRow2: {
        height: 40
    },
    tableRow3: {
        height: 50
    },
    tableText: {
        textAlign: 'center'
    },
    table: {
        marginBottom: 10
    }
});
