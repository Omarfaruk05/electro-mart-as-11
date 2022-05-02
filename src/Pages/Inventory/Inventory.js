import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect( () => {
        const url = `http://localhost:5000/product/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])

    return (
        <div>
            <h3>this is inventory:{product.name}</h3>
        </div>
    );
};

export default Inventory;