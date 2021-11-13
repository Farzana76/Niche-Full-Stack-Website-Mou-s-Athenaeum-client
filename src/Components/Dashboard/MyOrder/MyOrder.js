import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';
import './MyOrder.css'

const MyOrder = () => {
    const {email, name} = useParams();
    const [ord, setOrd] = useState([]);
    const { user, loading } = useAuth();
    
    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrd(data));
    }, []);

    // DELETE a order
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            const url = `https://peaceful-ridge-90551.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrders = ord.filter(order => order._id !== id);
                        setOrd(remainingOrders);
                    }
                });
        }
    }
    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>
                <div className="mx-5 mb-5 d-flex justify-content-center heading">
                    <Table striped bordered hover variant="transparent" responsive>
                        <thead>
                            <tr>
                            <th>Order Id</th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Delete Order</th>
                            </tr>
                        </thead>
                        {ord.filter(o => o.email === email).map(filteredOrd=> (
                                
                                    <tbody>
                                        <tr>
                                        <td>{filteredOrd._id}</td>
                                        <td>{filteredOrd.product}</td>
                                        <td>{filteredOrd.status}</td>
                                        <td><button onClick={() => handleDeleteUser(filteredOrd._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </tbody>  
                                    
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;