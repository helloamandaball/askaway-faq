import React from "react";
import { Route, Routes } from "react-router-dom";
import QuestionList from "../question/QuestionList";
import QuestionForm from "../question/QuestionForm";

export default function ApplicationViews() {
    return (
        <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/create" element={<QuestionForm/>} />
            <Route path="/edit/:id" element={<QuestionForm/>} />
        </Routes>
    )
};