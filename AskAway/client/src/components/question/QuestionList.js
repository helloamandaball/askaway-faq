import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { QuestionContext } from "../../providers/QuestionProvider";
import QuestionDetails from "./QuestionDetails";
import SearchAll from "../search/SearchAll";
import "./Question.css"

const QuestionList = () => {

    const { questions, getAll } = useContext(QuestionContext)

    const navigate = useNavigate();
    
    const handleNewBtn = () => {
        navigate(`/create`)
    };

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className="main">
            <div className="text-center py-3 mb-3 mainHdr">
                <h1 className="">&#127754;</h1>
                <h1 className="display-2 text-light ps-3 qHdr">ASK AWAY</h1>
                <h5 className="fs-4 fw-normal fst-italic" >A FAQ page for Bravo Consulting</h5>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col align-top">
                        <Button onClick={handleNewBtn} variant="primary" className="btn">
                            Add New FAQ
                        </Button>
                    </div>
                    <div className="col-6 align-top">
                        <SearchAll />
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <table id="faq-table" className="display pt-3 mb-3">
                    <thead>
                        <tr>
                            <th className="pb-4">Question</th>
                            <th className="pb-4">Answer</th>
                        </tr>
                    </thead>
                    <tbody className="border-bottom border-top border-secondary">
                        {questions.map((q) => {
                            return (
                                <QuestionDetails key={q.id} question={q} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuestionList;