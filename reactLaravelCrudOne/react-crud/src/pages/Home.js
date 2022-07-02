import React from 'react';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';



const Home = () => {
    return (
        <div>
      

  <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
<Preloader />
<Navbar />
<Sidebar/>
<Content/>
<Footer/>
  </div>
  </div>


  
        </div>
    );
};

export default Home;