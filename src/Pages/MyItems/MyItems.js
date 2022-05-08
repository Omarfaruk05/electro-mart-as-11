import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import ManageItems from '../ManageInventory/ManageItems/ManageItems';

const MyItems = () => {
    const [addedPrducts, setAddedProducts] = useState([]);
    useEffect( () => {
        const url = `http://localhost:5000/addedProduct`
    }, [])
    
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://quiet-headland-86526.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'  
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    const [user] = useAuthState(auth)
    const [products, setProducts]  = useProducts([]);

    const myProducts = products.filter(product => product.email === user.email);
    return (
        <div className='main mb-5'>
            <div className='d-flex justify-content-center align-items-center add-items-btn-container'>
                   <Link to={"/addItems"}><button className='button text-center add-items-btn '>Add Items</button></Link>
                </div>
            <div className='all-inventory' style={{minHeight:'100vh'}}>
                {
                    myProducts.map(product => <ManageItems key={product._id} product={product} handleDelete={handleDelete}></ManageItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;