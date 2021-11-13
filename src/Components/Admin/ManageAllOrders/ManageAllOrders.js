import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const ManageAllOrders = () => {
    const [ord, setOrd] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrd(data));
    }, [ord])

    // DELETE a order
    const handleDeleteOrder = id => {
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

    // Update pending
    const handleUpdateOrder = id => {
        const url = `https://peaceful-ridge-90551.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ord)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Shipping Successful');
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
                <div className="mx-5 mb-5 d-flex justify-content-center heading">
                    <Table striped bordered hover variant="transparent" responsive>
                        <thead>
                            <tr>
                            <th>Order Id</th>
                            <th>Client's Email</th>
                            <th>Client's Name</th>
                            <th>Client's Number</th>
                            <th>Client's Address</th>
                            <th>Client's City</th>
                            <th>Product Name</th>
                            {/* <th>Status</th> */}
                            <th>Approval</th>
                            <th>Delete Order</th>
                            </tr>
                        </thead>
                        {ord.map(o => (
                                    <tbody>
                                        <tr>
                                        <td>{o._id}</td>
                                        <td>{o.email}</td>
                                        <td>{o.name}</td>
                                        <td>{o.phone}</td>
                                        <td>{o.address}</td>
                                        <td>{o.city}</td>
                                        <td>{o.product}</td>
                                        {/* <td>{o.status}</td> */}
                                        <td>{
                                            o.status === 'Shipped' ?
                                            <button className="btn btn-secondary" disabled>Shipped</button>
                                            :
                                            <button onClick={() => handleUpdateOrder(o._id)} className="btn btn-primary">Ship</button>}</td>
                                        <td><button onClick={() => handleDeleteOrder(o._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </tbody>  
                                    
                        ))}
                    </Table>
                </div>
            </div>  
        </div>
    );
};

export default ManageAllOrders;