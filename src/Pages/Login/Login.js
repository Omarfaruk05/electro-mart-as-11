import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    let errorElement;
    const navigate = useNavigate();
    const location  = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

      const handleSubmit = async(event) => {
          event.preventDefault();
          const email = event.target.email.value;
          const passowrd = event.target.password.value;

          await signInWithEmailAndPassword(email, passowrd);

        fetch('https://quiet-headland-86526.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            localStorage.setItem('token', result.token);
            navigate(from, {replace: true});
        })
      };

      const resetPassword = async() => {
        const email = emailRef.current.value;
          if(email){
              await sendPasswordResetEmail(email);
              toast('Email send')
          }
          else{
              toast('Please enter your email address')
          }
      }


      if(loading){
          return <LoadingSpinner></LoadingSpinner>
      }

      if(error){
          errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }
    return (
        <div>
            <div style={{maxWidth:"500px", height:'80vh'}} className='container mt-5'>
                <div>
                    <h1 className='text-center mb-4'>Login to your account</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='email' ref={emailRef} className='py-2 input' type="email"    placeholder="Email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name='password' className='py-2' type="password" placeholder="Password" />
                        </Form.Group>
                        {errorElement}
                        <Button variant="primary d-block mx-auto px-5" type="submit">
                            login
                        </Button>  
                    </Form>
                    <p>Don't have an account? <Link className='text-decoration-none' to={"/register"}>Please Register</Link></p>
                    <p>Forget Password? <Link onClick={resetPassword} className='text-primary pe-auto text-decoration-none' to="/login">Reset Password</Link> </p>
                </div>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;