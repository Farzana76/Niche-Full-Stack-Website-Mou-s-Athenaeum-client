import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css';

const Product = (props) => {
    const {_id, title, price, stock, img} = props.product;
    const history = useHistory();
    
    const handleDetails = () => {
        history.push(`/product/${_id}&&${title}`);
    }
    return (
        <div className="product">
            <Col>
             <Card className="rounded-3 bg-light gallery">
                <Card.Img variant="top" className="p-3" src={img} />
                {/* <Card.ImgOverlay className="text-light overlay"> */}
                    <Card.Title>
                        <h2 className="h3 fw-bold">{title}</h2>
                    </Card.Title>
                
                <Card.Text className="px-3 pb-3">
                        <h3 className="border border-info text-info rounded">Price: ${price}</h3>
                        <h4 className="fw-light h5">Availabilty: {stock}</h4>
                        {/* <h4 className="">{desc}</h4> */}
                        <button onClick={handleDetails} className="btn btn-success mt-4">Buy Now</button>
                </Card.Text>
                {/* </Card.ImgOverlay> */}
                
            </Card>
            </Col>
        </div>
    );
};

export default Product;