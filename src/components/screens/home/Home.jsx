
import Car from "./car-item/Car";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";

function Home()  {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const data = await CarService.getAll();
            setCars(data)
        }

        fetchData();
    }, []);


    return (
        <div>
            <h1>Cars Catalog</h1>
            <div>
                <CreateCarForm setCars={setCars}/>
                {cars.length ? 
                    cars.map(cars => (
                    <Car key={cars.id} car={cars} />
                ))
                : <p>no Cars</p>
            
            }
            </div>
        </div>
    )
}





export default Home;