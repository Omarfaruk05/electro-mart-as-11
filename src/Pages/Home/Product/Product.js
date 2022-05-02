import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    let newName;
    const navigate = useNavigate();
    const {_id, name, img, discription, price, supplierName} = product;
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
        <div className='col-md-6 col-lg-4' >
        <Card  className='rounded-2 m-4 shadow'>
            <Card.Img variant="top" className='mx-auto' style={{width:'250px'}} src={img} />
            <Card.Body>
            <Card.Title className='fs-3 mb-4'>{newName}</Card.Title>
            <h4>Price: ${price}</h4>
            <Card.Text>{discription.slice(0, 150) + "......."}</Card.Text>
            <h5>Supplier: {supplierName}</h5>
            </Card.Body>
            <Card.Footer className='border-0 bg-white'>
                <button onClick={() => navigateToInventory (_id)} className='text-center bg-primary text-white w-100 btn'>Update</button>
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Product;