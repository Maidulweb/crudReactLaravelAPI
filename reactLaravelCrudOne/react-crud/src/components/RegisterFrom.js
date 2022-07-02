import React, { Component } from 'react';
import axios from 'axios';

class RegisterFrom extends Component {
  state = {
            name : '',
            email : '',
            password :''
          }
          
   inputHandle = (e) =>{
    

    this.setState({
      [e.target.name] : e.target.value,
    });
    
  }
    registerSubmit = async (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/user', this.state);
    if(res.data.status === 200){
      console.log(res.data.message);
    }
  } 

    render() {
        return (
            <div>
              <div className="register-box">
  <div className="register-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>

  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>

      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name='name' onChange={this.inputHandle} value={this.state.name} placeholder="Name"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" name='email'  onChange={this.inputHandle} value={this.state.email} placeholder="Email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name='password' onChange={this.inputHandle} value={this.state.password} placeholder="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
         
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
        </div>
      </form>

 

      <a href="login.html" className="text-center">I already have a membership</a>
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default RegisterFrom;