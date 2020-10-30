
import React from 'react'
import { useImmer } from "use-immer";
import { initContext } from './Proposal/actions/QuestionActions';

export const AppContext = React.createContext()



const initialState = {
    token: '',
    categoryAnswers: {}

}


export const QuestionContext = ({ children }) => {
    const [questions, handleQuestion] = useImmer(initialState)
    const questionActions = initContext(questions, handleQuestion)

    return (
        <AppContext.Provider value={{ questions, questionActions }}>
            {children}
        </AppContext.Provider>
    )
}


