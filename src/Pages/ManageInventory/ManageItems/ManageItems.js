import React from 'react';

const ManageItems = ({product, handleDelete}) => {
    const {_id, name, img, quantity, email} = product;


    return (
        <div>
            <div className='container row mx-auto mt-5 text-center border rounded align-items-center' style={{height:'150px'}}>
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
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;