import React from 'react';
import './VolunteerRegister.css';
import { useForm } from "react-hook-form";

const VolunteerRegister = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://volunteer-network-server-1.herokuapp.com/volunteers", {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full Name" {...register("fullName")} />
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="date" {...register("date")} />
                <textarea placeholder="Description"{...register("description")}></textarea>
                <input type="text" placeholder="Event Title" {...register("eventTitle")} />


                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default VolunteerRegister;