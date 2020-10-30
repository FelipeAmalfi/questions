import { StyleSheet } from 'react-native';


export const styles = (props) => StyleSheet.create({


    cardContainer: {
        marginBottom: 12,
        marginLeft: 4,
        marginRight: 4,
        padding: 18,
        backgroundColor: '#efefef',
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'flex-start',
        minHeight: 100,
        borderColor: props.selected ? '#4D8AF0' : '#fff',
        borderWidth: props.selected ? 2 : 0


    },

    cardText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 4
    }

});
