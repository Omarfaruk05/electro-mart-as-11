import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/5khnMYH/banner4.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/6nkqZBL/banner3.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Y7QKCkj/banner1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/5YgsrC6/banner2.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;