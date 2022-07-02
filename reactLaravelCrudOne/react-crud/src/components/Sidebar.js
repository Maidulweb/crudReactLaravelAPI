import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
<a href="index3.html" className="brand-link">
    <img src="assets/img/user2-160x160.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a> 

  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="">
        <img src="assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>

    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
      
        <li className="nav-header">EXAMPLES</li>
   
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>
              Project
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/invoice.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Invoice</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/profile.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Profile</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/e-commerce.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>E-commerce</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/projects.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-add.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Add</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-edit.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Edit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-detail.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Detail</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contacts.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Contacts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/faq.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contact-us.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-plus-square"></i>
            <p>
              User
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>
                  Login & Register
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                <Link className="nav-link" to='/login'>
                    <i className="far fa-circle nav-icon"></i>
                    <p>Login</p>
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/register'>
                    <i className="far fa-circle nav-icon"></i>
                    <p>Register</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Forgot Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Recover Password</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
           
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Register</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Forgot Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Recover Password</p>
                  </a>
                </li>
              </ul>
            </li>
           
           
          
          </ul>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
        </div>
    );
};

export default Sidebar;