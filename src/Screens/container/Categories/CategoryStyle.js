import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        height: '100%',
        padding: 20

    },
    cardContainer: {
        marginBottom: 12,
        padding: 14,
        backgroundColor: '#efefef',
        borderRadius: 18,
        borderColor: '#343C58',
        borderWidth: 1,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },


    textItem: {
        fontSize: 18,
        color: '#343C58',
        fontWeight: 'bold'
    },

    title: {
        fontSize: 20,
        color: '#343C58',
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 12

    },

    cardV: {
        borderRadius: 8
    },
    card: {
        marginTop: -12,
        marginBottom: -12
    },

    footerText: {
        fontSize: 12,

    },
    footerLink: {
        fontSize: 12,
        fontWeight: "bold"
    },


    subtext: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 16,
        marginRight: -8

    },

    headerAndroid: {
        backgroundColor: '#7159c1'
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    spinnerView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    errorView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 16
    },

    errorText: {
        textAlign: 'center',
        fontSize: 24
    },

    errorIcon: {
        color: '#7159c1',
        fontSize: 48
    },

    reloadText: {
        marginTop: 16,
        color: '#7b1fa2',
        fontSize: 24
    }


});

export const dynamicStyles = (props) => StyleSheet.create({

    text: {
        color: props.color,
        fontSize: 32,
        fontWeight: 'bold',
    },

});
