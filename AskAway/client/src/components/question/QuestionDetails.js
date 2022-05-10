import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Question.css"

const QuestionDetails = ({question}) => {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit/${question.id}`)
    };

    return (
        <tr id={question.id} className="qRow">
            <td className="fs-6 fw-normal align-top col-sm-4 ps-1 pe-5 pt-1 pb-3 mt-0">{question.query}</td>
            <td className="fs-6 fw-normal align-top col-md-4 ps-1 pe-5 pt-1 pb-3 mt-0">{question.answer}</td>
            <td className="text-end align-middle col-sm-1 ps-1 pe-3 pt-1 pb-1 mt-0"><Button onClick={handleEdit} variant="outline-secondary" size="sm" className="btn">Edit</Button></td>
        </tr>
    )
};

export default QuestionDetails;