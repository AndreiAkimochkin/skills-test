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
    phone: yup
        .string()
        .required("Phone number is a required field"),
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
});


const Step2 = () => {

    const { setValues, data } = useData();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: { phone: data.phone, email: data.email },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        navigate("/step3", { replace: true });
        setValues(data);
    };

    const onBack = () => {
        navigate("/")
    };
    return (
        <div className='step'>
            <h1 className='title'> Step 2</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <>
                    <label className='label'>Phone</label>
                    <Input
                        {...register('phone')}
                        id='phone'
                        type='tel'
                        name='phone'
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                    />
                </>
                <>
                    <label className='label'>Email</label>
                    <Input
                        {...register('email')}
                        id='email'
                        type='email'
                        name='email'
                        error={!!errors.email}
                        helperText={errors?.email?.message}
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

export default Step2;