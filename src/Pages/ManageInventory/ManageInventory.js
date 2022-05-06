import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageItems from './ManageItems/ManageItems';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
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
        <div>
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                   <Link to={"/addItems"}><button className='btn btn-success '>Add Items</button></Link>
                </div>
                {
                    products.map(product => <ManageItems key={product._id} product={product} handleDelete={handleDelete}></ManageItems>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;