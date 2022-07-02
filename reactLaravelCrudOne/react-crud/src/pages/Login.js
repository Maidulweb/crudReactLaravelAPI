import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import LoginFrom from '../components/LoginFrom';

const Login = () => {
    return (
        <div>
        <div className='hold-transition login-page'>
<LoginFrom/>
        </div>
        </div>
    );
};

export default Login;