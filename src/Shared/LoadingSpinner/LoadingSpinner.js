import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default LoadingSpinner;