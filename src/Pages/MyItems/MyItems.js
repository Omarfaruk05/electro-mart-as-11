import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ManageItems from '../ManageInventory/ManageItems/ManageItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [addedPrducts, setAddedProducts] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getAddedProducts = async() => {
            const email = user.email;
            const url = `https://quiet-headland-86526.herokuapp.com/addedProduct?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                  
                })
                setAddedProducts(data)
            }
            catch(error){
                if(error.response.status === 403 || error.response.status === 401){
                    signOut(auth)
                    navigate('/login')
                }
            }
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