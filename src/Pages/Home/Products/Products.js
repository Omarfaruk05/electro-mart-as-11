import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Product from '../Product/Product';
 
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const slicedProducts = products.slice(0, 6);
    return (
       <div className='container mx-auto'>
           <h1 className='text-center mt-4'>Products</h1>
            <div>
                <CardGroup>
                {
                    slicedProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
                </CardGroup>
            </div>
       </div>
    );
};

export default Products;