import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { QuestionContext } from "../../providers/QuestionProvider";

const QuestionForm = () => {
    const { addQuestion, getById, editQuestion } = useContext(QuestionContext);

    const [question, setQuestion] = useState({
        query: "",
        answer: "",
        createDateTime: new Date() 
    })

    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleChangeInput = (event) => {
        const newQuestion = { ...question }
        newQuestion[event.target.id] = event.target.value
        setQuestion(newQuestion)
    }

    const handleSave = () => {
        if (question.query === "" || question.answer === "") {
            window.alert("Please complete all input fields.")
        } else {
            setIsLoading(true);
            if (id) {
                editQuestion(question)
                    .then(navigate("/"))
            } else {
                addQuestion(question)
                    .then(navigate("/"));
            };
        };
    }

    useEffect(() => {
        if (id) {
            getById(id)
                .then(question => {
                    setQuestion(question)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Form>
                    <FormGroup className="mb-3" >
                        <Label for="query">Question:</Label>
                        <Input
                            id="query"
                            placeholder="Enter question..."
                            onChange={handleChangeInput}
                            value={question.query}
                            required
                        />
                    </FormGroup>
                    <FormGroup className="mb-3" >
                        <Label for="answer">Answer:</Label>
                        <Input
                            id="answer"
                            placeholder="Enter answer..."
                            onChange={handleChangeInput}
                            value={question.answer}
                            required
                        />
                    </FormGroup>
                    <Button className="btn btn-primary" variant="primary" disabled={isLoading} 
                        onClick={e => {
                        e.preventDefault()
                        handleSave()
                    }}>
                        {id ? <>Save Update</> : <>Create</>}
                    </Button>
                    <Button className ="mx-3" variant="secondary" onClick={() => navigate("/")}>Cancel</Button>
                </Form>
            </div>
        </div>
    );
};

export default QuestionForm;