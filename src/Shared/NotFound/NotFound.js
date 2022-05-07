import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='main not-found-container d-flex justify-content-center align-items-center'>
                <div>
                    <h1>ERROR <span>404</span> NOT FOUND </h1>
                    <h5>You may have mis-typed the URL. Or the page has been removed. Actually, there is nothing to see here... <br /> <br />
                    Click on the links below to do something, Thanks!</h5>
                    <Link to={"/home"}><button className='button'>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;