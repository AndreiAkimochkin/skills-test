import React from 'react';
import '../styles/Step.css'
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useData} from "../DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import {Input} from "./Input";
import {Button} from "@mui/material";


const schema = yup.object().shape({
    seat: yup
        .string()
        .required("Seat is a required field"),
    food: yup
        .string()
        .required("Food is a required field"),
    allergies: yup
        .string()
        .required("Allergies is a required field")
});


const Step3 = () => {

    const { setValues, data } = useData();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: { seat: data.seat, food: data.food, allergies: data.allergies},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        navigate("/result");
        setValues(data);
    };

    const onBack = () => {
        navigate("/step2");
    };
    return (
        <div className='step'>
            <h1 className='title'> Step 3</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <>
                    <label className='label'>Seat</label>
                    <Input
                        {...register('seat')}
                        id='seat'
                        type='text'
                        name='seat'
                        error={!!errors.seat}
                        helperText={errors?.seat?.message}
                    />
                </>
                <>
                    <label className='label'>Food</label>
                    <Input
                        {...register('food')}
                        id='food'
                        type='text'
                        name='food'
                        error={!!errors.food}
                        helperText={errors?.food?.message}
                    />
                </>
                <>
                    <label className='label'>Allergies</label>
                    <Input
                        {...register('allergies')}
                        id='allergies'
                        type='text'
                        name='allergies'
                        error={!!errors.allergies}
                        helperText={errors?.allergies?.message}
                    />
                </>
                <div className='btn_field'>
                    <Button type='submit' variant='contained' color='secondary' onClick={onBack}>
                        Back
                    </Button>
                    <Button type='submit' variant='contained' >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Step3;