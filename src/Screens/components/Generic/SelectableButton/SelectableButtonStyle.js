import { StyleSheet } from 'react-native';


export const styles = (props) => StyleSheet.create({

    button: {
        backgroundColor: props.selected ? props.color : '#ffffff',
        padding: 12,
        borderRadius: 4,
        borderColor: props.color,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'


    },

    text: {
        color: props.selected ? '#ffffff' : props.color,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 4
    }

});
