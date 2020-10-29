import React from 'react'
import { Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { styles } from './SelectableButtonStyle'

const SelectableButton = ({ text, click }) => {
    return (
        <TouchableOpacity onPress={click}>
            <Text >{text}</Text>
        </TouchableOpacity>
    )
}

export default SelectableButton