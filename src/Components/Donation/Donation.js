import React, { useState } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Donation.css';

const Donation = () => {
    const { register, handleSubmit } = useForm();
    const [donated, setDonated] = useState(false);
    const [donatedAmount, setDonatedAmount] = useState(0);

    const onSubmit = data => {
        setDonatedAmount(data.amount)
        setDonated(true);
    };

    return (
        <Container className="my-5">
            {
                donated ?
                    <div>
                        <h2 className="display-6 text-center fw-bold">
                            THANK YOU FOR DONATING {donatedAmount}
                        </h2>
                    </div>
                    :

                    <div>
                        <h2 className="display-6 text-center fw-bold">
                            DONATE SOME MONEY FOR HELP LESS PEOPLE
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup className="mt-4 search">
                                <FormControl
                                    type="number"
                                    placeholder="$00.00"
                                    className="p-2"
                                    {...register("amount", { required: true })}
                                />
                                <button type="submit" className="btn btn-primary fw-normal py-2 px-4">Donate</button>
                            </InputGroup>
                        </form>
                    </div>
            }
        </Container>
    );
};

export default Donation;