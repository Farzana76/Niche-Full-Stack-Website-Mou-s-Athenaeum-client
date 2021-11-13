import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Review = () => {
    const { register, handleSubmit, reset, formState: { errors }, Select } = useForm();
    const { user, loading } = useAuth(); 

    const onSubmit = data => {
        console.log(data);
        axios.post('https://peaceful-ridge-90551.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
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

                <div className="w-50 m-auto p-3 mt-5 border rounded mb-3 add-detail border-info">
                        <h1 className="mb-3 heading body">Review Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <div className="d-flex align-self-stretch heading">
                                <p>Rating: </p>
                                <input {...register("rating", { required: true })} type="radio" value="1" />1
                                <input {...register("rating", { required: true })} type="radio" value=" 2" />2
                                <input {...register("rating", { required: true })} type="radio" value=" 3" />3
                                <input {...register("rating", { required: true })} type="radio" value=" 4" />4
                                <input {...register("rating", { required: true })} type="radio" value=" 5" />5
                            </div>
                            
                            {/* <select placeholder="Rating" defaultValue="" {...register("rating", { required: true })}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> */}
                            <textarea placeholder="Review" defaultValue="" {...register("review")} />

                            <input type="submit" className="btn btn-primary text-light heading btn-lg w-50" value="Submit Review"/>
                        </form>
                </div>
            </div>
            
        </div>
    );
};

export default Review;