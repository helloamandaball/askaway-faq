import React, { useContext, useState } from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap"
import { QuestionContext } from "../../providers/QuestionProvider"

const SearchAll = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const { searchQuestions } = useContext(QuestionContext);

    const handleSearch = () => {
        // console.log("Search button clicked!", searchTerm);
        searchQuestions(searchTerm);
    };

    return (
        <InputGroup className="mb-3">
            <FormControl id="q"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="q"
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Button id="q" variant="outline-primary" onClick={handleSearch}>
                Search
            </Button>
        </InputGroup>
    )
}

export default SearchAll;