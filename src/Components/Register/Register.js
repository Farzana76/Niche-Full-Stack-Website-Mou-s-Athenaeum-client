import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router';
import '../Login/Login.css';
import Menu from '../Menu/Menu';

const Register = () => {
    const { error, getName, getEmail, userRegistration, getPassword } = useAuth();
    const history = useHistory();
   
    const handleLoginSubmit = e => {

        userRegistration(history);
        e.preventDefault();
    }

    return (
        <div>
            <Menu></Menu>
            <h1 className="m-5"></h1>
            <div className="w-50 m-auto p-3 mt-3 border rounded mb-3 border-info">
                <h1 className="mb-3 heading">Please Register</h1>
                <div className="text-danger" style={{ height: "50px" }}>
                    {error}
                </div>
                <form>
                    <input
                    onChange={getName}
                    className="form-control mb-3"
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    />
                    <input
                    onChange={getEmail}
                    className="form-control mb-3"
                    type="email"
                    name=""
                    id=""
                    placeholder="E-mail"
                    />
                    <input
                    onChange={getPassword}
                    className="form-control mb-3"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    />
                    <Link to="/login">
                    <button
                        onClick={handleLoginSubmit}
                        className="btn btn-primary text-light heading btn">Register
                    </button>
                    </Link>
                </form>
                <p className="mt-3">
                    Already registered? <Link to="/login">Log in</Link> here{" "}
                </p>
            </div>
            <h1 className="m-5"></h1>
            <Footer></Footer>
        </div>
    );
};

export default Register;