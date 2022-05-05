import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});
    const {_id, name, img, discription, price, supplierName} = product;
    
    useEffect( () => {
        const url = `http://localhost:5000/product/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])

    return (
        <div>
            <div className='container mt-5'>
                <div class="card mb-3 ">
                    <div class="row g-3 m-5">
                        <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title mb-3">{name}</h2>
                                <p class="card-text">{discription}</p>
                                <p class="card-text fw-bold">Supplier: {supplierName}</p>
                                <h4>Price: ${price}</h4>
                                <p class="card-text"></p>
                                <button className='btn btn-success'>Deleverd</button>
                                <div className='d-flex'>
                                <Form.Control name='email' className='my-2 py-2 w-25' type="text" />
                                    <button className='btn btn-success ms-2'>Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;