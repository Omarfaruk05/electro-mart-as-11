import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import ManageItems from '../ManageInventory/ManageItems/ManageItems';

const MyItems = () => {
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
    const [user] = useAuthState(auth)
    const [products, setProducts]  = useProducts([]);

    const myProducts = products.filter(product => product.email === user.email);
    return (
        <div>
            <div style={{minHeight:'100vh'}}>
                {
                    myProducts.map(product => <ManageItems key={product._id} product={product} handleDelete={handleDelete}></ManageItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;