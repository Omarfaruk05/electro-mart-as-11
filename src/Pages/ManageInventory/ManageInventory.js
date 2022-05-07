import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageItems from './ManageItems/ManageItems';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
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

    return (
        <div className='main'>
            <div className=''>
                <div className='d-flex justify-content-center align-items-center add-items-btn-container'>
                   <Link to={"/addItems"}><button className='button text-center add-items-btn '>Add Items</button></Link>
                </div>
               <div className='all-inventory' style={{minHeight:'100vh'}}>
                    {
                        products.map(product => <ManageItems key={product._id} product={product} handleDelete={handleDelete}></ManageItems>)
                    }
               </div>
            </div>
        </div>
    );
};

export default ManageInventory;