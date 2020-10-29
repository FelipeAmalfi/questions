
import React from 'react'
import { useImmer } from "use-immer";
import { difficulties } from './Constants/DifficultyConstants'
import { compareObjects } from '../Utils/Utils'

export const AppContext = React.createContext()



const initialState = {
    token: '',
    categoryAnswers: {}

}


export const QuestionContext = ({ children }) => {
    const [questions, handleQuestion] = useImmer(initialState)

    async function addAnsweredQuestion(categoryId, difficuty, correct) {
        await handleQuestion(draft => {
            draft.categoryAnswers[categoryId].answers.push({
                difficulty: difficuty,
                correctAnswer: correct
            })
        })
        if (questions.categoryAnswers[categoryId].answers.length >= 2) {
            handleDifficulty(categoryId)
        }
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

        if (compareObjects(currentAnswers[currentAnswers.length - 1], currentAnswers[currentAnswers.length - 2])) {
            let lastQuestion = currentAnswers[currentAnswers.length - 1]
            if (lastQuestion.correctAnswer && currentDifficulty < difficulties.HARD) {
                changeDifficulty(categoryId, currentDifficulty + 1)
            }
            else if (!lastQuestion.correctAnswer && currentDifficulty > difficulties.EASY) {
                changeDifficulty(categoryId, currentDifficulty - 1)
            }

        }
    }

    function changeDifficulty(categoryId, newDifficulty) {
        handleQuestion(draft => {
            draft.categoryAnswers[categoryId].currentDifficulty = newDifficulty
        })
    }

    return (
        <AppContext.Provider value={{ questions, addAnsweredQuestion, newQuestionSet, setToken }}>
            {children}
        </AppContext.Provider>
    )
}

