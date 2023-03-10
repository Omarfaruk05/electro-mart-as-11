import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import SocialLogin from "./SocialLogin/SocialLogin";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const emailRef = useRef("");
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const onSubmit = async (data, event) => {
    console.log(data);
    const email = data.email;
    const passowrd = data.password;

    await signInWithEmailAndPassword(email, passowrd);

    fetch("https://electro-mart-server-2-0.onrender.comlogin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
      });
  };

  const resetPassword = async (data) => {
    const email = data.email;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email send");
    } else {
      toast("Please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{ maxWidth: "500px" }}
        className="w-50 mx-auto main add-items"
      >
        <h1 className="text-center py-3 add-items-header">Please Login</h1>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2 input"
            type="email"
            ref={emailRef}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="mb-2 input"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errorElement}
          <input type="submit" value="login" className="input input-submit" />
        </form>
        <p className=" mt-2">
          Don't have an account?{" "}
          <Link className="text-decoration-none orange-color" to={"/register"}>
            Please Register
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <Link
            onClick={handleSubmit(resetPassword)}
            className="pe-auto text-decoration-none orange-color"
            to="/login"
          >
            Reset Password
          </Link>{" "}
        </p>
        <div>
          <SocialLogin></SocialLogin>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
