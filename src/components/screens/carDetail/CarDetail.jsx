import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CarService } from '../../../services/car.service';
import Car from '../home/car-item/Car';
import { withAuth } from '../../HOC/withAuth';

const CarDetail = () => {

    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(()=> {
        
        if (!id) return

        const fetchData = async () => {
            const data = await CarService.getAllById(id);
            setCar(data)
        }

        fetchData();
    }, [id]);

    if (!car) return (
        <div>
            <Link to='/'>Back</Link>
            <notFound />
        </div>
    ) 
    if (!car.id) return <p>Loading...</p>

    return (
        <div>
            <Link to='/'>Back</Link>
            <Car car={car} />
        </div>
    )
}

export default withAuth(CarDetail)