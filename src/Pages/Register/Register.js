import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { async } from '@firebase/util';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Register = () => {
    let errorElement;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth); 

    const handleSubmit = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
    }

    if(emailUser){
        navigate("/home");
    }

    if(emailLoading || updating){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(emailError){
        return errorElement = <p>{emailError?.message}</p>
    }
    return (
        <div>
            <div  style={{maxWidth:"500px", height:'80vh'}} className='container mx-auto w-100 mt-5'>
                <h1 style={{color:'#4b886f'}} className='text-center mb-4'>Please Register</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='py-2 fs-5' name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='py-2 fs-5'name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='py-2 fs-5'name="confirmedPassword" type="password" placeholder="Confirmed Password" required />
                        </Form.Group>
                   
                            
                        {errorElement}
                        <Button variant="primary w-100 fs-5 mb-2" type="submit">
                            Register
                        </Button>
                    </Form>
                        <p>Already have an account? <Link className='text-primary pe-auto text-decoration-none' to="/login">Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;