import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import ManageItems from '../ManageInventory/ManageItems/ManageItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [addedPrducts, setAddedProducts] = useState([]);
    useEffect( () => {
        
        const getAddedProducts = async() => {
            const email = user.email;
            const url = `http://localhost:5000/addedProduct?email=${email}`;
            const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
              
            })
            setAddedProducts(data)
        }
        getAddedProducts();
            
    }, [user])

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
                
            })
        }
    }
    return (
        <div className='main mb-5'>
            <div className='d-flex justify-content-center align-items-center add-items-btn-container'>
                   <Link to={"/addItems"}><button className='button text-center add-items-btn '>Add Items</button></Link>
                </div>
            <div className='all-inventory' style={{minHeight:'100vh'}}>
                {
                    addedPrducts.map(addedProduct => <ManageItems key={addedProduct._id} product={addedProduct} handleDelete={handleDelete}></ManageItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;