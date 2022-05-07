import React from 'react';
import './Footer.css'

const Footer = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
    }
    return (
        <div className='footer'>
            <h1 className='logo mx-auto mb-4'>Electro Mart </h1>
            <hr />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3 className='mb-4'>ABOUT</h3>
                        <p>This is one kind of electronic warehouse. Here you can all electronic products like TV, Refridgerator, Fan, Micro Woven, Sound System etc. </p>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='mb-4'>CONTACT INFO</h3>
                        <h5>Address:</h5>
                        <p>Telihaty, Sreepur, Gazipur, Dhaka, Bangladesh</p>
                        <h5>Phone:</h5>
                        <p>01567900262, 01941221528, 01834765144</p>
                        <h5>Email:</h5>
                        <p>mdomarfaruk149518@gmail.com, omarfaruk149518@gmail.com</p>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='mb-4'>NEWS</h3>
                        <h5>Get the latest creative news. Subscribe!</h5>
                        <form onSubmit={handleSubmit}>
                            <input className='input' type="email" placeholder='Enter Your Email' name="email" required/>
                            <button className='button go-btn'>GO</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;