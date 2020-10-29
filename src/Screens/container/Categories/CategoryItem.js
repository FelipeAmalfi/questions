
import React from 'react';
import { Text, Icon, Card, CardItem } from 'native-base'
import { styles, dynamicStyles } from './CategoryStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CategoryItem = ({ name, onClick }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onClick}>
            <Text style={styles.textItem}>{name}</Text>
        </TouchableOpacity>
    )

}