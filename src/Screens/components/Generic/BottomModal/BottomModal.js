import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import Button from '../ActionButton/ActionButton'
import { styles } from './BottomModalStyle'

export const BottomModal = ({ visible, text, click }) => {
    return (
        <Modal isVisible={visible} style={styles.container}>
            <View style={styles.visibleContainer}>
                <Button text={text} click={click} />
            </View>

        </Modal>

    )
}