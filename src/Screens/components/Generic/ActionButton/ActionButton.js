import React from 'react'
import { Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './ActionButtonStyle'

const ActionButton = ({ text, click }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={click} >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity >
    )
}

export default ActionButton