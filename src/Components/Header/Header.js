import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/bg1.jpg';
import img2 from '../../img/bg2.JPG';
import img3 from '../../img/bg3.jpg';
// import img4 from '../../img/s4.jpg';
// import img5 from '../../img/s5.jpg';
import './Header.css';

const Header = () => {
    
    return (
        <div className="carousel">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">BE FIT,<br></br>BE HEALTHY</h1>
                    </Carousel.Caption> */}
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Maintain proper BMI</h3>
                        <p>Clock's ticking</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">HEALTH IS THE KEY<br></br>TO HAPPINESS</h1>
                    </Carousel.Caption> */}
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Want healthy mind?</h3>
                        <p>Don't be late to join</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                {/* <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">HEALTH IS THE KEY<br></br>TO HAPPINESS</h1>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Want healthy mind?</h3>
                        <p>Don't be late to join</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">HEALTH IS THE KEY<br></br>TO HAPPINESS</h1>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Want healthy mind?</h3>
                        <p>Don't be late to join</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>        
        </div>
    );
    
};

export default Header;