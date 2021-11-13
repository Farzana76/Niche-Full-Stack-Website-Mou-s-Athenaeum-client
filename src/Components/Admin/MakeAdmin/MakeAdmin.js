import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const MakeAdmin = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // const user = { email };
        fetch('https://peaceful-ridge-90551.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Made Admin Successfully');
                    console.log(data);
                    reset();
                }
            })

        // e.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-50 m-auto p-3 border rounded mb-3 border-info add-service">
                    <h1 className="mb-3 heading">Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true })} placeholder="Email" />
                        {errors.title?.type === 'required' && "Email is required"}
                                
                        <input type="submit" className="btn btn-primary text-light heading btn-lg w-50" value="Make Admin"/>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;