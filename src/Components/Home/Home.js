import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import Header from '../Header/Header';
// import Service from '../Service/Service';
import './Home.css';
import { Link } from 'react-router-dom';
import vdo from '../../img/vd.mov';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import SingleReview from '../Dashboard/SingleReview/SingleReview';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    // loading products data
    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // loading review data
    useEffect(() => {
        fetch('https://peaceful-ridge-90551.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Menu></Menu>
            <div className="home">
                <Header></Header>
                {/* passing data of services */}
                <div className="services2">
                <h1 className="heading mt-3">Artworks</h1>
                <Row xs={1} md={2} lg={3} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        products.slice(0, 6).map(product => <Product
                            key = {product._id}
                            product={product}
                            ></Product>)
                    }
                </Row> 
            </div>
            <div className="services2">
                <h1 className="heading mt-3">Client Reviews</h1>
                <Row xs={1} md={1} lg={2} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        reviews.slice(0, 6).map(review => <SingleReview
                            key = {review._id}
                            review={review}
                            ></SingleReview>)
                    }
                </Row> 
            </div>
            <div className="services2 mb-5">
                <h1 className="heading mt-3">Video of Paintings</h1>
                <video src={vdo} autoPlay="true" className="w-75" controls/>
            </div>
                {/* 
                <div className="m-5 heading">
                    <h1 className="heading mt-3">Our Achievements</h1>
                    <CardGroup>
                        <Card className="mx-3 px-4 pt-4 mb-0 pb-0 bg-transparent border-0">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className="pb-0">
                            <Card.Title className="pb-0 mb-0">2020 Travellers' Choice</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 px-4 pt-4 mb-0 pb-0 bg-transparent border-0">
                            <Card.Img variant="top" src={img3} />
                            <Card.Body className="pb-0">
                            <Card.Title className="pb-0 mb-0">Best Family Day Out 2019</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 px-4 pt-4 mb-0 pb-0 bg-transparent border-0">
                            <Card.Img variant="top" src={img2} />
                            <Card.Body className="pb-0">
                            <Card.Title className="pb-0 mb-0">Certificate of Excellence 2019</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 px-4 pt-4 mb-0 pb-0 bg-transparent border-0">
                            <Card.Img variant="top" src={img4}/>
                            <Card.Body className="pb-0">
                            <Card.Title className="pb-0 mb-0">Best for Big Kids in the UK 2019</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 px-4 pt-4 mb-0 pb-0 bg-transparent border-0">
                            <Card.Img variant="top" src={img5}/>
                            <Card.Body className="pb-0">
                            <Card.Title className="pb-0 mb-0">Experts' Choice Award 2021</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className="mx-5 mb-5 heading">
                    <h1 className="heading">Upcoming Events</h1>
                    <CardGroup>
                        <Card className="mx-3 mb-0 pb-0 rounded border-0 bg-light">
                            <Card.Header className="bg-danger text-light rounded">
                            <h4 className="fw-light">11 November, '21</h4>
                            </Card.Header>
                            <Card.Body className="p-1">
                            <Card.Img variant="top" className="rounded-3" src={img6} />
                            
                                <Card.Title>
                                    <h1 className="h2">Yule Ball Dance</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Link to="/events">
                                        <button className="btn btn-dark mb-1">More Info</button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 mb-0 pb-0 rounded border-0 bg-light">
                            <Card.Header className="bg-danger text-light rounded">
                            <h4 className="fw-light">Nov 15, '21 - Nov 22, '21</h4>
                            </Card.Header>
                            <Card.Body className="p-1">
                            <Card.Img variant="top" className="rounded-3" src={img7} />
                            
                                <Card.Title>
                                    <h1 className="h2">Visit Gringotts Bank</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Link to="/events">
                                        <button className="btn btn-dark">More Info</button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 mb-0 pb-0 rounded border-0 bg-light">
                            <Card.Header className="bg-danger text-light rounded">
                            <h4 className="fw-light">Nov 23, '21 - Nov 25, '21</h4>
                            </Card.Header>
                            <Card.Body className="p-1">
                            <Card.Img variant="top" className="rounded-3" src={img8} />
                            
                                <Card.Title>
                                    <h1 className="h2">Potion Making</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Link to="/events">
                                        <button className="btn btn-dark">More Info</button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-3 mb-0 pb-0 rounded border-0 bg-light">
                            <Card.Header className="bg-danger text-light rounded">
                            <h4 className="fw-light">Dec 1, '21 - Dec 7, '21</h4>
                            </Card.Header>
                            <Card.Body className="p-1">
                            <Card.Img variant="top" className="rounded-3" src={img9} />
                            
                                <Card.Title>
                                    <h1 className="h2">Learn Dark Arts</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Link to="/events">
                                        <button className="btn btn-dark">More Info</button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;