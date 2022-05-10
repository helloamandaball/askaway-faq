import React, { useState, createContext } from "react";

export const QuestionContext = createContext();

export function QuestionProvider(props) {
    
    const apiUrl = "https://localhost:5001";

    const [questions, setQuestions] = useState([]);

    //GET ALL QUESTIONS
    const getAll = () => {
        return fetch(`${apiUrl}/api/question`)
        .then(res => res.json())
        .then(setQuestions);
    };

    //GET QUESTION BY ID
    const getById = (id) => {
        return fetch(`${apiUrl}/api/question/${id}`)
        .then(res => res.json())
    };

    //ADD NEW QUESTION
    const addQuestion = (question) => {
        return fetch(`${apiUrl}/api/question`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        }).then(getAll);
    };

    //EDIT QUESTION
    const editQuestion = (question) => {
        return fetch(`${apiUrl}/api/question/${question.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        }).then(getAll)
    };

    //SEARCH QUESTIONS
    const searchQuestions = (q) => {
        return fetch(`${apiUrl}/api/question/search?criterion=${q}&sortDesc=true`)
        .then(res => res.json())
        .then(setQuestions);
    };

    return (
        <QuestionContext.Provider value={{
            questions, getAll, getById, addQuestion, editQuestion, searchQuestions
        }}>
            {props.children}
        </QuestionContext.Provider>
    );
};