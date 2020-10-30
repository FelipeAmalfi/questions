import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 20

    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    spinnerView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    headerTitle: {
        fontSize: 20,
        color: '#343C58',
        fontWeight: 'bold'
    },

    questionTitle: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 20
    },
    ratingContainer: {
        backgroundColor: '#D6D8DE',
        flexDirection: 'row',
        borderRadius: 16,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8
    },
    ratingText: {
        fontSize: 12,
        justifyContent: 'space-between',
        color: '#343C58',
    },

});



