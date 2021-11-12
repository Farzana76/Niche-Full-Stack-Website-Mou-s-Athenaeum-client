import React from 'react';
import './Footer.css';
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faFacebook} />
const element2 = <FontAwesomeIcon icon={faInstagram} />
const element3 = <FontAwesomeIcon icon={faAt} />
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                {/* first column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3">
                    <img className="w-25 mb-4" src={logo} alt="" />
                    <h4 className="fw-400">Location</h4>
                    <h5>Dhaka, Bangladesh</h5>
                </div>
                {/* second column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3 mt-5 pt-5">
                    <h4>Around the web</h4>
                    {/* icon links */}
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/canvasacrylicpaintingsbysnm" className="text-light me-2 h4">
                        {element}
                    </a> 
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/story_of_canvas_art_by_snm/" className="text-light me-2 h4">
                        {element2}
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://myaccount.google.com/profile" className="text-light h4">
                        {element3}
                    </a>
                </div>
                {/* third column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-5 mt-4">
                    <h4>About</h4>
                    <h5> You'll find here the best artworks</h5>
                    <h5> to decor your home.</h5>
                </div>
            </div>
            <div className="text-light p-2 h5 mb-0 last bg-dark">
                <p>&copy; farzanamou773@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;