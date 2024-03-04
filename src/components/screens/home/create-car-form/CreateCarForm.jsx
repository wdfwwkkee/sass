import React, { useState } from 'react'
import styles from './CreateCarForm.module.scss'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarService } from '../../../../services/car.service';


const CreateCarForm = () => {

    const { register, reset, handleSubmit, formState : {errors} } = useForm({
        mode: "onChange"
    });

    const queryClient = useQueryClient()


    const { mutate } = useMutation({
        mutationKey : ["create car"],
        mutationFn : (data)=> CarService.create(data),
        onSuccess : ()=> {
            queryClient.invalidateQueries('cars')
            reset();
        } 
    })

    const createCar = data => {
        mutate({...data })
    }

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit(createCar)}>
            <input placeholder='Name' type="text" {...register('name', {required : 'Name is required'})} />
            {errors?.name?.message && <p className='error' >Name is required</p> }
            <input placeholder='Price' type="text" {...register('price', {required : 'Price is required'})} />
            {errors?.price?.message && <p className='error' >price is required</p> }
            <input placeholder='Image' type="text" {...register('image', {required : 'Image is required'})} />
            {errors?.image?.message && <p className='error' >image is required</p> }
            <button className='btn'>Create</button>
        </form>
    )
}

export default CreateCarForm