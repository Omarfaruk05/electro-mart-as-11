import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});
    const {_id, name, img, discription, price, supplierName} = product;
    let {quantity} = product;
    console.log()
    useEffect( () => {
        const url = `http://localhost:5000/product/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {setProduct(data)});
        
    },[])
 
    const handleDedeverd = (id) => {
        if(quantity > 1){
            quantity = quantity - 1;
        }
        else{
            quantity = 'Sold Out'
        }
       

    };

    const handleAdd = (event) => {
        event.preventDefault();
        const AddedQuantity = event.target.number.value;
        quantity = quantity + parseInt(AddedQuantity);
        console.log(quantity);
        
        const updatedQuantity= { quantity}
        console.log(updatedQuantity)

        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        
    }
    
    return (
        <div>
            <div className='container mt-5'>
                <div className="card mb-3 ">
                    <div className="row g-3 m-5">
                        <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title mb-3">{name}</h2>
                                <p className="card-text">{discription}</p>
                                <p className="card-text fw-bold">Supplier: {supplierName}</p>
                                <h4>Price: ${price}</h4>
                                <h4>Quantity: {quantity}</h4>
                                <p className="card-text"></p>
                                <button onClick={handleDedeverd} className='btn btn-success'>Deleverd</button>
                                <div className='d-flex'>
                                    <Form onSubmit={handleAdd}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="number" name='number' placeholder="Add items quantity" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add
                                        </Button>
                                    </Form>
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