import React, { useContext, useEffect } from 'react';
import { View, Image, BackHandler } from 'react-native';
import { Text } from 'native-base'
import { AppContext } from '../../../store/AppContext'
import { difficultyLevel } from '../../../store/Proposal/Constants/DifficultyConstants'
import { styles } from './ResultStyle'
import { upperCaseFirstLetter } from '../../../Utils/Utils'
import conclusionChar from '../../../assets/conclusion_character.png'
import ActionButton from '../../components/Generic/ActionButton/ActionButton'



const Result = ({ navigation, route }) => {
    const { categoryId } = route.params
    const appContext = useContext(AppContext)
    const { questions } = appContext
    const { answers } = questions.categoryAnswers[categoryId]


    function checkCorrectResult(correct, array) {
        let result = array.filter(item => item.correctAnswer === correct)
        return result.length
    }

    function checkSingleResult(diff) {
        let filtered = answers.filter(item => item.difficulty === diff)
        let correct = checkCorrectResult(true, filtered)
        let wrong = checkCorrectResult(false, filtered)
        return { correct, wrong }
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => { });
        return () => BackHandler.removeEventListener('hardwareBackPress', () => { });
    }, [])

    const GeneralResult = ({ type, total }) => {
        return (
            <View style={styles.generalResultContainer}>
                <Text style={styles.generalResultTotal}>{total}</Text>
                <Text style={styles.generalResultType}>{type}</Text>
            </View>
        )
    }

    const SingleResult = ({ diff }) => {
        const { correct, wrong } = checkSingleResult(diff)
        return (
            <View style={styles.SingleResultContainer}>
                <Text style={styles.SingleResultDiff}>{upperCaseFirstLetter(difficultyLevel[diff])}</Text>
                <Text style={styles.SingleResultText}>{`Correct: ${correct}`}</Text>
                <Text style={styles.SingleResultText}>{`Wrong: ${wrong}`}</Text>

            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={conclusionChar}
                    width={160}
                    height={180}
                />
                <View style={styles.congratsContainer}>
                    <Text style={styles.congratsTitle}>Congratulations</Text>
                    <Text style={styles.congratsBody}>You've finished the test</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}> Check out your performance</Text>
                </View>
                <View style={styles.correctContainer}>
                    <GeneralResult total={checkCorrectResult(true, answers)} type={'correct'} />
                    <GeneralResult total={checkCorrectResult(false, answers)} type={'wrong'} />
                </View>
                <View style={styles.singleResult}>
                    <SingleResult diff={1} />
                    <SingleResult diff={2} />
                    <SingleResult diff={3} />
                </View>
                <View style={styles.buttonContainer}>
                    <ActionButton text={'Back to categories'} click={() => navigation.push('Categories')} />
                </View>

            </View>

        </View>
    )
}


export default Result;