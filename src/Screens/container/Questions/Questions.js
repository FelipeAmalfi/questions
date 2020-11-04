import React, { useEffect, useState, useContext, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text, Spinner } from 'native-base'

import SelectableButton from '../../components/Generic/SelectableButton/SelectableButton'
import { AppContext } from '../../../store/AppContext'
import { fetchQuestions } from '../../../Service/questionService'
import { difficulties, difficultyLevel, levelStar } from '../../../store/Proposal/Constants/DifficultyConstants'
import { styles } from './QuestionStyle'
import { upperCaseFirstLetter, removeHTML } from '../../../Utils/Utils'
import { BottomModal } from '../../components/Generic/BottomModal/BottomModal'
import { CorrectModal } from '../../components/Common/CorrectModal/CorrectModal'

const constModalVisible = {
    NONE: 0,
    ANSWER: 1,
    CORRECT: 2,
    NEXT: 3

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
    const [answerInfo, setInfo] = useState({})
    const [modalVisibility, setModalVisibility] = useState(constModalVisible.NONE)
    const [settedUp, setSettedUp] = useState(false)

    const quantity = useMemo(() => categoryAnswers[categoryId] ? categoryAnswers[categoryId].answers.length : 0, [categoryAnswers])

    const fetchCategoryQuestions = useCallback(async (difficulty) => {
        const { results } = await fetchQuestions(1, categoryId, difficultyLevel[difficulty], token, 'multiple')
        setCurrentQuestion(results[0])
        setAnswers(results[0].incorrect_answers.concat(results[0].correct_answer))
    }, [fetchQuestions, categoryId, questions])


    const checkCorrect = useCallback(answer => {
        return answer === currentQuestion.correct_answer
    }, [currentQuestion])

    function selectAnswer(id, correct, answer) {
        setSelected(id)
        setInfo({ correct, answer })
        setModalVisibility(constModalVisible.ANSWER)
    }

    const answerQuestion = useCallback(() => {
        if (questions.categoryAnswers[categoryId]) {
            addAnsweredQuestion(categoryId, questions.categoryAnswers[categoryId].currentDifficulty, answerInfo.correct, answerInfo.answer)
            handleModal(constModalVisible.CORRECT)
            setSelected(-1)
        }
    }, [answerInfo, questions.categoryAnswers[categoryId], handleModal])

    const handleModal = useCallback(modalId => {
        setModalVisibility(constModalVisible.NONE)
        setTimeout(() => setModalVisibility(modalId), 500)
    }, [setModalVisibility])

    const next = useCallback(() => {
        setModalVisibility(constModalVisible.NONE)
        if (questions.categoryAnswers[categoryId] && questions.categoryAnswers[categoryId].answers.length >= 10) {
            navigation.push('Result', { categoryId: categoryId, name: name })
        } else {
            fetchCategoryQuestions(categoryAnswers[categoryId].currentDifficulty)
        }
    }, [questions.categoryAnswers[categoryId], categoryId, name])

    useEffect(() => {
        if (questions.categoryAnswers[categoryId] && questions.categoryAnswers[categoryId].answers.length > 1) {
            handleDifficulty(categoryId)
        }
    }, [questions.categoryAnswers[categoryId]])

    useEffect(() => {
        if (!settedUp) {
            if (questions.categoryAnswers[categoryId]) {
                fetchCategoryQuestions(categoryAnswers[categoryId].currentDifficulty)
            } else {
                newQuestionSet(categoryId)
                fetchCategoryQuestions(difficultyLevel[difficulties.MEDIUM])
            }
            setSettedUp(true)
        }
    }, [])


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
                    <Text style={styles.questionTitle}>{removeHTML(currentQuestion.question)}</Text>
                    <FlatList
                        data={answers.sort()}
                        renderItem={({ item: answer, index }) =>
                            <SelectableButton
                                text={removeHTML(answer)}
                                selected={index === selected}
                                click={() =>
                                    selectAnswer(index, checkCorrect(answer), answer)
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
            <BottomModal visible={modalVisibility === constModalVisible.ANSWER} text={'Answer'} click={() => answerQuestion()} />
            <BottomModal visible={modalVisibility === constModalVisible.NEXT} text={'Next →'} click={() => next()} />
            <CorrectModal correct={answerInfo ? answerInfo.correct : false}
                visible={modalVisibility === constModalVisible.CORRECT}
                onClose={() => handleModal(constModalVisible.NEXT)} />
        </View>

    )
}


export default Questions;