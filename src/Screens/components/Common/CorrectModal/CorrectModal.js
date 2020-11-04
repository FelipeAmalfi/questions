import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text, Icon } from 'native-base'
import { styles } from './CorrectModalStyle'
import Modal from 'react-native-modal';



export const CorrectModal = ({ correct, visible, onClose }) => {
    return (
        <Modal isVisible={visible}
            customBackdrop={
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
            }
        >
            <View style={styles({ correct }).container}>
                <Text style={styles({ correct }).icon}>{correct ? '✔' : '✖'}</Text>
                <Text>{correct ? 'Right answer' : 'Wrong answer'}</Text>
            </View>
        </Modal>)
}
