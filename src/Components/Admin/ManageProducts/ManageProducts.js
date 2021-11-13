import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const ManageProducts = () => {
    const [prod, setProd] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProd(data));
    }, [prod])

    // DELETE a order
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            const url = `https://peaceful-ridge-90551.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingProducts = prod.filter(product => product._id !== id);
                        setProd(remainingProducts);
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
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif', position: 'fixed', width: '90%'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>
                <div className="mx-5 mb-5 d-flex justify-content-center heading mt-5 pt-5">
                    <Table striped bordered hover variant="transparent" responsive>
                        <thead>
                            <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                            <th>Product Stock</th>
                            <th>Product Description</th>
                            <th>Delete Product</th>
                            </tr>
                        </thead>
                        {prod.map(o => (
                                    <tbody>
                                        <tr>
                                        <td>{o._id}</td>
                                        <td>{o.title}</td>
                                        <td>${o.price}</td>
                                        <td><img
                                            className="d-block w-100"
                                            src={o.img}
                                            alt="Product"
                                            />
                                        </td>
                                        <td>{o.stock}</td>
                                        <td>{o.desc}</td>
                                        <td><button onClick={() => handleDeleteProduct(o._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </tbody>  
                                    
                        ))}
                    </Table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageProducts;