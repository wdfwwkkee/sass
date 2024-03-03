import React, { useState } from 'react'
import styles from './CreateCarForm.module.scss'
import { useForm } from 'react-hook-form';

const clearData = {
    price: '',
    name: '',
    image: '',
};


const CreateCarForm = ({ setCars }) => {


    const [data, setData] = useState(clearData);


    const { register, reset, handleSubmit, formState : {errors} } = useForm({
        mode: "onChange"
    });


    const createCar = data => {
        setCars(prev => [{ id: prev.length + 1, ...data }, ...prev])
        console.log(data)

        reset();

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