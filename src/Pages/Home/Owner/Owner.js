import React from 'react';

const Owner = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6 col-lg-4">
                        <div className='m-4 p-2 shadow  rounded'>
                            <div>
                                <img className='img-fluid rounded' src="https://i.ibb.co/XZ1mxvp/tonmoy.jpg" alt="Photo" />
                            </div>
                            <div>
                                    <h2 style={{color:'#ff6f60'}}>Nymur Khan Tonmoy <span>Manager</span></h2>
                                    <p>B.B.A (DHAKA UNIVERSITY), M.B.A (DHAKA UNIVERSITY)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='m-4 p-2 shadow  rounded'>
                            <div>
                                <img className='img-fluid rounded' src="https://i.ibb.co/NYLLgCw/rasel.jpg" alt="Photo" />
                            </div>
                            <div>
                                    <h2 style={{color:'#ff6f60'}}>Md. Rasel Hassan <span>Manager</span></h2>
                                    <p>B.B.A (CUMILLA UNIVERSITY), M.B.A (DHAKA UNIVERSITY)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='m-4 p-2 shadow  rounded'>
                            <div>
                                <img className='img-fluid rounded' src="https://i.ibb.co/dDHpt13/shorif.jpg" alt="Photo" />
                            </div>
                            <div>
                                    <h2 style={{color:'#ff6f60'}}>Md: Shariful Islam Rakib <span>Assistent Manager</span></h2>
                                    <p>B.B.A (RAJSHAHI UNIVERSITY), M.B.A (DHAKA UNIVERSITY)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owner;