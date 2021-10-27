import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (
        <Container>
            <h2 className="display-5 text-center fw-bold">
                I GROW BY HELPING PEOPLE IN NEED
            </h2>

            <InputGroup className="mt-4 search">
                <FormControl
                    placeholder="Search"
                    className="p-2"
                />
                <InputGroup.Text className="btn btn-primary fw-normal py-2 px-4">Search</InputGroup.Text>
            </InputGroup>
        </Container>
    );
};

export default Search;