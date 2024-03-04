
import Car from "./car-item/Car";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header";

function Home()  {

    const {data, isLoading, error} = useQuery({
        queryKey : ["cars"],
        queryFn : ()=> {return CarService.getAll()}
    })



    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars Catalog</h1>

            <Header />

            <div>
                <CreateCarForm/>
                {data.length ? 
                    data.map(cars => (
                    <Car key={cars.id} car={cars} />
                ))
                : <p>no Cars</p>
            
            }
            </div>
        </div>
    )
}





export default Home;