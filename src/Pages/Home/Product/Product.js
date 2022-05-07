import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    let newName;
    const navigate = useNavigate();
    const {_id, name, img, discription, price, supplierName, quantity} = product;
    if(name.length > 20){
        newName = name.slice(0, 30) + "......";
    }
    else{
        newName = name;
    }

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className=' col-md-6 col-lg-4' >
        <Card  className='product-card m-4'>
            <Card.Img variant="top" className='mx-auto' style={{width:'250px'}} src={img} />
            <Card.Body>
            <Card.Title className='fs-3 mb-4'>{newName}</Card.Title>
            <h4>Price: <span className='orange-color'>${price}</span></h4>
            <Card.Text>{discription.slice(0, 150) + "......."}</Card.Text>
            <h5>Supplier: <span>{supplierName}</span></h5>
            <h5>Quantity: <span className='orange-color'>{quantity}</span></h5>
            <button onClick={() => navigateToInventory (_id)} className='update-btn mt-3 text-center w-100'>Update</button>
            </Card.Body>
                
        </Card>
    </div>
    );
};

export default Product;