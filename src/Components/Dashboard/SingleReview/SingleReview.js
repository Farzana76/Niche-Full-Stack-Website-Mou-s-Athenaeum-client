import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleReview = (props) => {
    const {name, email, rating, review} = props.review;
    return (
        <div className="product text-left">
            <Col>
             {/* <Card className="rounded-3 bg-light gallery"> */}
                {/* <Card.Title> */}
                <div className="d-flex">
                    <h4 className="fw-light h5 me-4 fw-bold">{name}</h4>
                    <Rating
                        className="text-warning"
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly>
                    </Rating>
                </div>

                <h4 className="fw-light h6">Email: {email}</h4>
                <h3 className="fw-normal h5">{review}</h3>
                <hr></hr>
                        
                {/* </Card.Text> */}
                
            {/* </Card> */}
            </Col>
        </div>
    );
};

export default SingleReview;