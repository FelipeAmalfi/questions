import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        marginLeft: 8,
        marginRight: 8
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    itemContainer: {
        alignItems: 'center',
        marginRight: 8,
        marginRight: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export const dynamicStyles = (props) => StyleSheet.create({

    text: {
        color: props.color,
        fontSize: 18,
        fontWeight: 'bold',
    },

});

