import React from 'react';
import Map from '../Map/Map';
import Banner from './Banner/Banner';
import Owner from './Owner/Owner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Owner></Owner>
            <Map></Map>
        </div>
    );
};

export default Home;