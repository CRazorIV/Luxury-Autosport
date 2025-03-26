import { useState, useEffect } from 'react';
import carsData from '../data/cars.json';

const Inventory = () => {
    // car data from the imported JSON file
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // imported JSON data
        setCars(carsData);
    }, []);

    return (
        <div className="page-container">
            <h1>Our Vehicle Collection</h1>
            <p>Browse our latest luxury vehicles and find your dream car.</p>

            <div className="car-list">
                {cars.map(car => (
                    <div className="car-card" key={car.id}>
                        <div className="car-image-container">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="car-image"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                                }}
                            />
                        </div>
                        <div className="car-details">
                            <h2>{car.name}</h2>
                            <p>{car.year} | {car.kilometers} | {car.fuel}</p>
                            <p className="car-price">{car.price}</p>
                            <button>More Info</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;
