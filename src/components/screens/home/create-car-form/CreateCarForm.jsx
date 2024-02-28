import React, { useState } from 'react'
import styles from './CreateCarForm.module.scss'

const clearData = {
    price: '',
    name: '',
    image: '',
};


const CreateCarForm = ({ setCars }) => {

    
    const [data, setData] = useState(clearData);


    const createCar = (e) => {
        e.preventDefault();
        console.log({ data })
        setCars(prev => [ { id: prev.length + 1, ...data }, ...prev ])


        setData(clearData);

    }

    return (
        <form className={styles.form} action="">
            <input placeholder='Name' type="text" onChange={e =>
                setData(prev => ({...prev, name: e.target.value}))
            } value={data.name} />
            <input placeholder='Price' type="text" onChange={e =>
                setData(prev => ({...prev, price: e.target.value}))
            } value={data.price} />
            <input placeholder='Image' type="text" onChange={e =>
                setData(prev => ({...prev, image: e.target.value}))
            } value={data.image} />

            <button className='btn' onClick={e => createCar(e)}>Create</button>
        </form>
    )
}

export default CreateCarForm