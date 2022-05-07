import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='main'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/wQsdQT5/IMG-20220502-151629.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/gmMFFkq/IMG-20220502-151544.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/x8S0L5Z/IMG-20220502-151422.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/9tN8vpb/IMG-20220502-151333.jpg"
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