import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import './Search.css';

const Search = props => {
    const { register, handleSubmit, onSubmit } = props;

    return (
        <Container>
            <h2 className="display-5 text-center fw-bold">
                I GROW BY HELPING PEOPLE IN NEED
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mt-4 search">
                    <FormControl
                        placeholder="Search"
                        className="p-2"
                        {...register("searchText")}
                    />
                    <button type="submit" className="btn btn-primary fw-normal py-2 px-4">Search</button>
                </InputGroup>
            </form>
        </Container>
    );
};

export default Search;