import React from 'react';
import './ManageItems.css'

const ManageItems = ({product, handleDelete}) => {
    const {_id, name, img, quantity} = product;


    return (
        <div>
            <div className='container row mx-auto mt-5 text-center align-items-center inventory-items'>
                <div className='col-sm-3'>
                    <img width={'100px'} src={img} alt="" />
                </div>
                <div className='col-sm-3'>
                    <h5>{name}</h5>
                </div>
                <div className='col-sm-3'>
                    <h5>{quantity}</h5>
                </div>
                <div  className='col-sm-3'>
                    <button onClick={() => handleDelete(_id)} className='button delete-btn'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;