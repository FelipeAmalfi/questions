
import React from 'react';
import { Text } from 'native-base'
import { styles } from './CategoryStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const CategoryItem = ({ name, onClick }) => {
    return (
        <LinearGradient colors={['#FCFCFC', '#F5F5F5', '#EFEFEF']} style={styles.cardContainer}>
            <TouchableOpacity onPress={onClick}>
                <Text style={styles.textItem}>{name}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )

}