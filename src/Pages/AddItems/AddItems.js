import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data.email);
    const url = `https://electro-mart-as-11-server.vercel.app//product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Product Added.");
      });
    event.target.reset();
  };

  return (
    <div
      style={{ maxWidth: "500px", height: "80vh" }}
      className="w-50 mx-auto main add-items"
    >
      <h2 className="text-center py-3 add-items-header">Please add items.</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 input"
          value={user?.email}
          {...register("email", { required: true })}
        />
        <input
          className="mb-2 input"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="mb-2 input"
          placeholder="Image Link"
          {...register("img", { required: true })}
        />
        <textarea
          className="mb-2 input"
          placeholder="Description"
          {...register("discription", { required: true })}
        />
        <input
          className="mb-2 input"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2 input"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2 input"
          placeholder="Supplier Name"
          {...register("supplierName", { required: true })}
        />
        <input type="submit" value="Add Items" className="input input-submit" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
