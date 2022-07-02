import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Addstudent extends Component 

{
  state = {
    name : '',
    department : '',
    email : '',
    phone : '',
    error_list : [],
  }
  handleInput = (e) => {
         this.setState({
            [e.target.name] : e.target.value,
         });
  }
  saveStudent = async (e) => {
       try {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);
        if(res.data.status === 200){
           swal({
             title: "Success!",
             text: res.data.message,
             icon: "success",
             button: "Ok",
           });
           this.setState({
             name : '',
             department : '',
             email : '',
             phone : '',
           });
        }else {
          console.log(res.data.validate_error)
         this.setState({
           error_list : res.data.validate_error,
           
         });
       }
       } catch (error) {
         
       }
  }
  render (){
      return (
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <div className='card'>
         <div className='card-header'>
        <h2>
        Add Student
            
            <Link to={'/'} className='btn btn-info float-end'>Back</Link>
        </h2>

        </div>
        <div className='card-body'>
          <form onSubmit={this.saveStudent}>
            <div className='form-group mb-3'>
              <label>Name</label>
               <input type='text' className='form-control' name='name' onChange={this.handleInput} value={this.state.name} placeholder='name' />
               <span className='text-danger'>{this.state.error_list.name}</span>
            </div>
            <div className='form-group mb-3'>
            <label>Department</label>
               <input type='text' className='form-control' name='department' onChange={this.handleInput} value={this.state.department} placeholder='Department' />
               <span className='text-danger'>{this.state.error_list.department}</span>
            </div>
            <div className='form-group mb-3'>
              <label>Email</label>
               <input type='text' className='form-control' name='email' onChange={this.handleInput} value={this.state.email} placeholder='Email' />
               <span className='text-danger'>{this.state.error_list.email}</span>
            </div>
            <div className='form-group mb-3'>
            <label>Phone</label>
               <input type='text' className='form-control' name='phone' onChange={this.handleInput} value={this.state.phone} placeholder='Phone' />
               <span className='text-danger'>{this.state.error_list.phone}</span>
            </div>
            <div className='form-group mb-3'>
               <button type='submit' className='btn btn-success'>Submit</button>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>
      );
  }
}

export default Addstudent;