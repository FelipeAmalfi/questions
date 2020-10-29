import React from 'react';
import { View } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base'
import { styles, dynamicStyles } from './InfoCardStyles'
import Icon from 'react-native-vector-icons/FontAwesome5';



const InfoItem = ({ icon, value, color }) => {
    return (
        <View style={styles.itemContainer}>
            <Icon name={icon} size={18} color={color} />
            <Text style={dynamicStyles({ color: color }).text}>{value}</Text>
        </View>
    )
}


export const InfoCard = ({ country, confirmed, deaths, recovered }) => {
    return (
        <View style={styles.container}>
            <Card>
                <CardItem>
                    <Text style={styles.title}>{country}</Text>
                </CardItem>
                <CardItem>
                    <View style={styles.infoContainer}>
                        <InfoItem icon={'ambulance'} value={confirmed} color={'#1e88e5'} />
                        <InfoItem icon={'check'} value={recovered} color={'#00c853'} />
                        <InfoItem icon={'skull-crossbones'} value={deaths} color={'#c62828'} />
                    </View>
                </CardItem>
            </Card>
        </View>
    )

}