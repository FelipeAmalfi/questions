
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Categories from '../Screens/container/Categories/Categories'
import Result from '../Screens/container/Result/Result'
import Questions from '../Screens/container/Questions/Questions'



const Stack = createStackNavigator();


export const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name="Categories" component={Categories}
                options={() => ({
                    title: 'Categories',
                    headerStyle: { backgroundColor: '#343C58' },
                    headerTintColor: '#fff',
                    headerLeft: null
                })} />
            <Stack.Screen name="Questions" component={Questions}
                options={{ title: 'Questions' }} options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: { backgroundColor: '#343C58' },
                    headerTintColor: '#fff'
                }
                )} />
            <Stack.Screen name="Result" component={Result}
                options={{ title: 'Busca' }} options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: { backgroundColor: '#343C58' },
                    headerTintColor: '#fff',
                    headerLeft: null
                })} />
        </Stack.Navigator>

    )
}