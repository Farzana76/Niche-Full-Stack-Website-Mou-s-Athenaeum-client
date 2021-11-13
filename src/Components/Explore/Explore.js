import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Product from '../Product/Product'

const Explore = () => {
    const [products, setProducts] = useState([]);

    // loading products data
    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Menu></Menu>
            <div className="services2">
                <h1 className="heading mt-3">Buy your favorite painting</h1>
                <Row xs={1} md={2} lg={3} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        products.map(product => <Product
                            key = {product._id}
                            product={product}
                            ></Product>)
                    }
                </Row> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;