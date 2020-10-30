
import { difficulties } from '../Constants/DifficultyConstants'
import moment from 'moment'

export function initContext(questions, handleQuestion) {

    function addAnsweredQuestion(categoryId, difficuty, correct, answer) {
        handleQuestion(draft => {
            draft.categoryAnswers[categoryId].answers.push({
                difficulty: difficuty,
                correctAnswer: correct,
                chosenAnser: answer,
                answeredDate: moment().format()
            })
        })

    }

    function newQuestionSet(categoryId) {
        handleQuestion(draft => {
            draft.categoryAnswers[categoryId] = { currentDifficulty: difficulties.MEDIUM, answers: new Array() }
        })
    }

    function setToken(token) {
        handleQuestion(draft => { draft.token = token })
    }


    function handleDifficulty(categoryId) {
        const { categoryAnswers } = questions;
        let { currentDifficulty } = categoryAnswers[categoryId]
        let currentAnswers = categoryAnswers[categoryId].answers

        if (compareAnswers(currentAnswers[currentAnswers.length - 1], currentAnswers[currentAnswers.length - 2])) {
            let lastQuestion = currentAnswers[currentAnswers.length - 1]
            if (lastQuestion.correctAnswer && currentDifficulty < difficulties.HARD) {
                changeDifficulty(categoryId, lastQuestion.difficulty + 1)
            }
            else if (!lastQuestion.correctAnswer && currentDifficulty > difficulties.EASY) {
                changeDifficulty(categoryId, lastQuestion.difficulty - 1)
            }

        }
    }

    function changeDifficulty(categoryId, newDifficulty) {
        handleQuestion(draft => {
            draft.categoryAnswers[categoryId].currentDifficulty = newDifficulty
        })
    }

    function compareAnswers(a1, a2) {
        return a1.difficulty === a2.difficulty && a1.correctAnswer === a2.correctAnswer
    }

    return { addAnsweredQuestion, newQuestionSet, setToken, handleDifficulty }

}


