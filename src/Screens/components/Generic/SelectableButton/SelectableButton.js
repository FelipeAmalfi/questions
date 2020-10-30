import React from 'react'
import { Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './SelectableButtonStyle'

const SelectableButton = ({ text, click, selected }) => {
    return (
        <TouchableOpacity style={styles({ selected: selected }).cardContainer} onPress={click} >
            <Text style={styles.cardText}>{text}</Text>
        </TouchableOpacity >
    )
}

export default SelectableButton