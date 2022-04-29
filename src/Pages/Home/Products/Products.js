import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Product from '../Product/Product';
 
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
       <div className='container mx-auto'>
            <div>
                <CardGroup>
                {
                    products.map(product => <Product product={product}></Product>)
                }
                </CardGroup>
            </div>
       </div>
    );
};

export default Products;