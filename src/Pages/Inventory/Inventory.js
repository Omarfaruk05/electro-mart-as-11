import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { register, handleSubmit } = useForm();
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});
    const {_id, name, img, discription, price, supplierName} = product;
    let {quantity} = product;

    useEffect( () => {
        const url = `https://quiet-headland-86526.herokuapp.com/product/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {setProduct(data)});
        
    },[product])
 
    const handleDedeverd = (id) => {
        if(quantity > 1){
            quantity = quantity - 1;
            const updatedQuantity = {quantity};
            product.quantity = quantity;

            const url = `https://quiet-headland-86526.herokuapp.com/product/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
            
            }
            else if(quantity === 1){
                quantity = 'Sold Out';
                const updatedQuantity = {quantity};

                const url = `https://quiet-headland-86526.herokuapp.com/product/${inventoryId}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedQuantity)
                })
                
            }
       
           
    };

    const onSubmit = (data, event) => {
        const AddedQuantity = data.quantity;

        if(quantity === 'Sold Out') {
            quantity = parseInt(AddedQuantity);
        }
        else{
            quantity = quantity + parseInt(AddedQuantity);
        }
        
        
        const updatedQuantity= { quantity}
        const url = `https://quiet-headland-86526.herokuapp.com/product/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        event.target.reset();
    }
    
    return (
        <div className='main'>
            <div className='container mt-5'>
                <div className=" card mb-3 ">
                    <div className="row g-3 m-5">
                        <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="orange-color card-title mb-3">{name}</h2>
                                <p className="card-text"><span className='orange-color fs-5 me-2'>Description:</span>{discription}</p>
                                <p className="card-text fw-bold"><span className='orange-color me-1'>Supplier:</span> {supplierName}</p>
                                <h4><span className='orange-color me-1'>Price:</span> ${price}</h4>
                                <h4><span className='orange-color me-1'>Quantity:</span> {quantity}</h4>
                                <p className="card-text"></p>
                                <button onClick={handleDedeverd} className='button'>Deleverd</button>
                                <div className='d-flex'>
                                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                    <input className='mb-1 input mt-3' placeholder='Add Items Quantity' type="number" {...register("quantity", { required: true})} />
                                    <input type="submit" value="Restock" className='button input-submit' />
                                </form>
                                </div>
                                <div>
                                    <Link to={"/manageInventory"}> <button className='button'>All Inventory</button> </Link>
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