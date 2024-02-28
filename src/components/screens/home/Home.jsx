
import Car from "./car-item/Car";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProviders";

function Home()  {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const data = await CarService.getAll();
            setCars(data)
        }

        fetchData();
    }, []);

    const {user, setUser} = useContext(AuthContext);

    return (
        <div>
            <h1>Cars Catalog</h1>

            {user ? (
            <div>
                <h2>Welcome {user.name}</h2>
                <button onClick={()=> setUser(null)}>Logout</button>
            </div>
            
            ) 
            : <button onClick={()=> {setUser({name : "Max"})}}>Login</button>
        
        } 

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