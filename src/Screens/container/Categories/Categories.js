import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { fetchCategories } from '../../../Service/questionService'
import { fetchToken } from '../../../Service/tokenService'
import { styles } from './CategoryStyle'
import { CategoryItem } from './CategoryItem'
import { AppContext } from '../../../store/AppContext'



const Categories = ({ navigation }) => {
    const appContext = useContext(AppContext)
    const { questions, setToken } = appContext
    const [categories, setCategories] = useState()


    const getCategories = useCallback(async () => {
        const { trivia_categories: categories } = await fetchCategories()
        setCategories(categories)

    }, [fetchCategories])

    const getApiToken = useCallback(async () => {
        const { token } = await fetchToken();
        setToken(token)
    }, [fetchToken])

    useEffect(() => {
        getCategories()
        getApiToken()

    }, [getCategories, getApiToken])

    const navigate = useCallback(categoryId => {
        if (questions.categoryAnswers[categoryId]) {
            let navigateTo = questions.categoryAnswers[categoryId].answers.length < 10 ? 'Questions' : 'Result'
            navigation.push(navigateTo, { categoryId })
        } else {
            navigation.push('Questions', { categoryId })
        }
    }, [questions])


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                {categories &&
                    <FlatList
                        data={categories}
                        renderItem={({ item }) =>
                            <CategoryItem
                                name={item.name}
                                onClick={() => navigate(item.id)}
                            />}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        </>
    )
}


export default Categories;