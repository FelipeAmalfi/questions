import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flex: 1
    },
    header: {
        flexDirection: 'row',
    },
    congratsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    congratsTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    congratsBody: {
        fontSize: 20,
    },
    infoContainer: {
        alignItems: "center"
    },

    divider: {
        borderWidth: 1,
        borderColor: '#343C58',
        borderStyle: 'dotted',
        flex: 1
    },

    sectionTitleContainer: {
        marginTop: 12,
        flexDirection: 'row'
    },

    sectionTitle: {
        fontSize: 18,
        color: '#343c58',
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: '#343c58',
        padding: 8,
        borderRadius: 8
    },
    correctContainer: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#EFF0F2',
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
        width: 220,
        justifyContent: 'space-evenly'
    },
    generalResultContainer: {
        alignItems: 'center'
    },
    generalResultTotal: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#343c58',
        marginBottom: 4
    },
    generalResultType: {
        fontSize: 16,
        color: '#343c58',
    },
    SingleResultContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    SingleResultDiff: {
        fontSize: 16,
        color: '#343c58',
        fontWeight: 'bold'
    },
    SingleResultText: {
        fontSize: 16,
        color: '#343c58',
    },
    singleResult: {
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer: {
        marginTop: 40
    }


});
