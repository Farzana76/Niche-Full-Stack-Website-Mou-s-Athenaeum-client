import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import './AddProduct.css';

const AddProduct = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://peaceful-ridge-90551.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-50 m-auto p-3 mt-5 border rounded mb-3 border-info add-service">
                    <h1 className="mb-3 heading">Please add a product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("title", { required: true })} placeholder="Title" />
                        {errors.title?.type === 'required' && "Title is required"}
                        
                        <input {...register("price", { required: true })} placeholder="Price"/>
                        {errors.price && "Price is required"}

                        <input {...register("img", { required: true })} placeholder="Image URL"/>
                        {errors.img?.type === 'required' && "Image is required"}

                        <input {...register("stock", { required: true })} placeholder="Availibility"/>
                        {errors.date?.type === 'required' && "Availibility is required"}
                        
                        <textarea {...register("desc", { required: true })} placeholder="Description"/>
                        {errors.desc && "Description is required"}
                        
                        <input type="submit" className="btn btn-primary text-light heading btn-lg" value="Add product"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;