import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text, Spinner } from 'native-base'
import Button from '../../components/Generic/SelectableButton/SelectableButton'
import { AppContext } from '../../../store/AppContext'
import { fetchQuestions } from '../../../Service/questionService'
import { difficulties, difficultyLevel } from '../../../store/Proposal/Constants/DifficultyConstants'
import { styles } from './QuestionStyle'
import { upperCaseFirstLetter } from '../../../Utils/Utils'
import HTMLView from 'react-native-htmlview';

const levelStar = {
    1: '★☆☆',
    2: '★★☆',
    3: '★★★'

}

const Questions = ({ navigation, route }) => {
    const { categoryId, name } = route.params
    const appContext = useContext(AppContext)
    const { questions, questionActions } = appContext
    const { addAnsweredQuestion, newQuestionSet, handleDifficulty } = questionActions
    const { token, categoryAnswers } = questions
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    const [selected, setSelected] = useState(-1)

    const quantity = useMemo(() => categoryAnswers[categoryId] ? categoryAnswers[categoryId].answers.length : 0, [categoryAnswers])

    const fetchCategoryQuestions = useCallback(async (difficulty) => {
        const { response_code, results } = await fetchQuestions(1, categoryId, difficultyLevel[difficulty], token, 'multiple')
        setCurrentQuestion(results[0])
        setAnswers(results[0].incorrect_answers.concat(results[0].correct_answer))
    }, [fetchQuestions, categoryId, questions])


    function checkCorrect(answer) {
        return answer === currentQuestion.correct_answer
    }

    async function answerQuestion(id, categoryId, difficuty, correct, answer) {
        setSelected(id)
        await addAnsweredQuestion(categoryId, difficuty, correct, answer)
    }

    useEffect(() => console.log(questions.categoryAnswers[categoryId]), [questions])

    useEffect(() => {
        if (questions.categoryAnswers[categoryId] && questions.categoryAnswers[categoryId].answers.length > 1) {
            handleDifficulty(categoryId)
        }
    }, [questions.categoryAnswers[categoryId]])

    useEffect(() => {
        if (questions.categoryAnswers[categoryId]) {
            fetchCategoryQuestions(categoryAnswers[categoryId].currentDifficulty)
        } else {
            newQuestionSet(categoryId)
        }

    }, [fetchCategoryQuestions, categoryAnswers])


    return (
        <View style={styles.container}>
            {currentQuestion ? (
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>{`Question ${quantity + 1}`}</Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>{levelStar[categoryAnswers[categoryId].currentDifficulty]}</Text>
                            <Text style={styles.ratingText}>{upperCaseFirstLetter(difficultyLevel[categoryAnswers[categoryId].currentDifficulty])}</Text>
                        </View>
                    </View>
                    <HTMLView
                        value={currentQuestion.question}
                        stylesheet={styles.questionTitle}
                    />
                    <Text style={styles.questionTitle}>{currentQuestion.question}</Text>
                    <FlatList
                        data={answers}
                        renderItem={({ item: answer, index }) =>
                            <Button
                                text={answer}
                                selected={index === selected}
                                click={() =>
                                    answerQuestion(index, categoryId, categoryAnswers[categoryId].currentDifficulty, checkCorrect(answer), answer)
                                }
                                keyExtractor={({ index }) => index} />}

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