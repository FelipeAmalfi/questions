import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import _ from 'lodash'
import { FlatList } from 'react-native-gesture-handler';
import { Text, Spinner } from 'native-base'
import Button from '../../components/Generic/SelectableButton/SelectableButton'
import { AppContext } from '../../../store/AppContext'
import { fetchQuestions } from '../../../Service/questionService'
import { difficulties, difficultyLevel } from '../../../store/Constants/DifficultyConstants'
import { styles } from './QuestionStyle'




const Questions = ({ navigation, route }) => {
    const { categoryId } = route.params
    const appContext = useContext(AppContext)
    const { questions, addAnsweredQuestion, newQuestionSet } = appContext
    const { token, categoryAnswers } = questions
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    const quantity = useMemo(() => categoryAnswers[categoryId] ? categoryAnswers[categoryId].answers.length : 0, [categoryAnswers])

    const fetchCategoryQuestions = useCallback(async (difficulty) => {
        const { response_code, results } = await fetchQuestions(1, categoryId, difficultyLevel[difficulty], questions.token, 'multiple')
        setCurrentQuestion(results[0])
        setAnswers(results[0].incorrect_answers.concat(results[0].correct_answer))
    }, [fetchQuestions, categoryId, questions])



    useEffect(() => {
        if (questions.categoryAnswers[categoryId]) {
            fetchCategoryQuestions(categoryAnswers[categoryId].currentDifficulty)
        } else {
            newQuestionSet(categoryId)
        }
    }, [fetchCategoryQuestions, categoryAnswers])

    function checkCorrect(answer) {
        return answer === currentQuestion.correct_answer
    }


    return (
        <View style={styles.container}>
            {currentQuestion ? (
                <View>
                    <Text>{`Question ${quantity + 1}`}</Text>
                    <Text>{currentQuestion.question}</Text>
                    <FlatList
                        data={answers}
                        renderItem={({ item: answer }) =>
                            <Button
                                text={answer}
                                click={() => addAnsweredQuestion(categoryId, difficulties.MEDIUM, checkCorrect(answer))} />}
                        keyExtractor={({ index }) => index}
                    />
                </View>
            ) : (
                    <View style={styles.spinnerView}>
                        <Spinner size={'large'} color='#7159c1' />
                    </View>
                )
            }

        </View>
    )
}


export default Questions;