import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';

const SocialLogin = () => {
    let errorElement;
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    };

    if(error){
        errorElement = <p>Error: {error?.message}</p>
    };

    if(user){
        navigate('/home')
    }

    return (
        <div>
        <div className='d-flex align-items-center'>
            <div  className='w-50'style={{height: '1px',backgroundColor:'#4b886f'}}></div>
            <p className='mt-2 px-2 fs-5'>or</p>
            <div className='w-50'style={{height: '1px', backgroundColor:'#4b886f'}}></div>
        </div>
        {errorElement}
        <div className='text-center'>
            <button onClick={() => signInWithGoogle ()} className='px-5 btn btn-primary'>Sign in with google</button>
        </div>
    </div>
    );
};

export default SocialLogin;