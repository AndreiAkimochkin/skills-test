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
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
    age: yup
        .string()
        .matches(/^[1-9]\d*$/, "Age should be positive")
        .required("Age must be a number"),
});


const Step1 = () => {

    const { setValues, data } = useData();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName, age: data.age },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        navigate("/step2");
        setValues(data);
    };
    return (
        <div className='step'>
            <h1 className='title'> Step 1</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <>
                    <label className='label'>First name</label>
                    <Input
                        {...register('firstName')}
                        id='firstName'
                        type='text'
                        name='firstName'
                        error={!!errors.firstName}
                        helperText={errors?.firstName?.message}
                    />
                </>
                <>
                    <label className='label'>Last name</label>
                    <Input
                        {...register('lastName')}
                        id='lastName'
                        type='text'
                        name='lastName'
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                    />
                </>
                <>
                    <label className='label'>Age</label>
                    <Input
                        {...register('age')}
                        id='firstName'
                        type='text'
                        name='age'
                        error={!!errors.age}
                        helperText={errors?.age?.message}
                    />
                </>
                <div   className='btn_submit'>
                    <Button type='submit' variant='contained'>
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Step1;