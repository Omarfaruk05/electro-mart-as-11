import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const Register = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password length should be at least 6 characters'),
        passwordConfirm: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must and should match'),
      })
    
      const validationOpt = { resolver: yupResolver(formSchema) }



    const { register, handleSubmit, reset, formState } = useForm(validationOpt);
    const { errors } = formState;
    let errorElement;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth); 
    const onSubmit = async(data, event) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;

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
       errorElement = <p className='text-danger'>Error: {emailError?.message}</p>
    }
    return (
        <div  style={{minHeight:"80vh"}}>
            <div style={{maxWidth:"500px"}} className='w-50 mx-auto main add-items'>
                <h1 className='text-center py-3 add-items-header'>Please Register</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2 input' name='name' type='text' placeholder='Full Name'{...register("name", { required: true})} />

                    <input className='mb-2 input' name='email' type='email' placeholder='Email'{...register("email", { required: true})} />

                    <input className={`mb-2 input ${errors.password ? 'is-invalid' : ''}`} name='password' type='password' placeholder='Password' {...register("password", { required: true})} />

                    <div className="invalid-feedback">{errors.password?.message}</div>

                    <input className={`mb-2 input ${errors.passwordConfirm ? 'is-invalid' : ''}`} name='passwordConfirm' type='password' placeholder='Password' {...register("passwordConfirm", { required: true})} />

                    <div className="invalid-feedback">{errors.passwordConfirm?.message}</div>

                    {errorElement}
                    <input type="submit" value="Register" className='input input-submit' />
                </form>
                <p className=' mt-2'>Don't have an account? <Link className='text-decoration-none orange-color' to={"/login"}>Please Login</Link></p>                
            </div >
            
        </div>
    );
};

export default Register;