import { StyleSheet } from 'react-native'

export const styles = ({ correct }) => StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: correct ? '#32CB82' : '#FF6660',
        borderWidth: 2,
        width: '60%',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    icon: {
        fontSize: 42,
        marginBottom: 20
    }
})