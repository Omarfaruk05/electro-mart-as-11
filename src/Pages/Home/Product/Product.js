import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({product}) => {
    const {name, img, discription, price, supplierName} = product;
    return (
        <div className='col-md-6 col-lg-4' >
        <Card  className='rounded-2 m-4 shadow'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className='fs-3 mb-4'>{name}</Card.Title>
            <h4>Price: ${price}</h4>
            <Card.Text>{discription}</Card.Text>
            <h5>Supplier: {supplierName}</h5>
            </Card.Body>
            <Card.Footer className='border-0 bg-white'>
                <button className='text-center bg-primary text-white w-100 btn'>Update</button>
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Product;