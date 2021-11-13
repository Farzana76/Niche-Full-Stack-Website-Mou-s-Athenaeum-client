import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Purchase.css';

const Purchase = () => {
    const {pid, title} = useParams();
    const [serv, setServ] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServ(data));
    }, [])

    const onSubmit = data =>{
        data.product = title;
        data.status = 'Pending';
        fetch('https://peaceful-ridge-90551.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <Menu></Menu>
            <div className="row body"> 
                <div className="col-lg-6 col-sm-12 col-md-12">
                    {serv.filter(p => p._id === pid).map(filteredProd=> (
                        <div>
                            <Card className="m-5">
                                <Card.Img variant="top" className="rounded-3" src={filteredProd.img} />
                                <Card.ImgOverlay className="text-light">
                                    <Card.Title className="overlay">
                                        <h1 className="display-5">{filteredProd.title}</h1>
                                    </Card.Title>
                                    </Card.ImgOverlay>
                                    <Card.Text className="p-3">
                                        <h4 className="">Price: ${filteredProd.price}</h4>
                                        <h5>Availability: {filteredProd.stock}</h5>
                                        <h5 className="">{filteredProd.desc}</h5>
                                    </Card.Text>
                            </Card>
                        </div>
                        
                    ))}
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12 mt-5 pt-5">
                    <div className="w-75 m-auto p-3 mt-5 border rounded mb-3 add-detail border-info">
                        <h1 className="mb-3 heading body">Order Placing Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} disabled/>

                            <input defaultValue={user.email} {...register("email", { required: true })} disabled />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" className="btn btn-primary text-light heading btn-lg w-50" value="Place Order"/>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;