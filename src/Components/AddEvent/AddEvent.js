import React from 'react';
import './AddEvent.css';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://volunteer-network-server-1.herokuapp.com/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Event Title" {...register("eventTitle")} />
            <input type="date" placeholder="Event Date" {...register("eventDate")} />
            <textarea placeholder="Event Description" {...register("description")}></textarea>
            <input placeholder="Event Banner" {...register("banner")} />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default AddEvent;