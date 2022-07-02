import React, {Component} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class Editstudent extends Component 

{
  state = {
    name : '',
    department : '',
    email : '',
    phone : '',
  }
  handleInput = (e) => {
         this.setState({
            [e.target.name] : e.target.value,
         });
  }
  async componentDidMount (){
    const student_id = this.props.params.id;
      const res = await axios.get(`http://127.0.0.1:8000/api/edit-student/${student_id}`);
      if(res.data.status === 200){
        this.setState({
          name : res.data.student.name,
          department : res.data.student.department,
          email : res.data.student.email,
          phone : res.data.student.phone,
        });
     }
  }
  editStudent = async (e) => {
       e.preventDefault();
       document.getElementById('btn-id').disabled = true;
       document.getElementById('btn-id').innerText = 'Updating';
       const student_id = this.props.params.id;
       const res = await axios.put(`http://127.0.0.1:8000/api/edit-student/${student_id}`, this.state);
       if(res.data.status === 200){
         // console.log(res.data.message);
         swal({
          title: "Update!",
          text: res.data.message,
          icon: "success",
          button: "Ok",
        });
          document.getElementById('btn-id').disabled = false;
          document.getElementById('btn-id').innerText = 'Updated Student';
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
        Update Student
            
            <Link to={'/'} className='btn btn-info float-end'>Back</Link>
        </h2>

        </div>
        <div className='card-body'>
          <form onSubmit={this.editStudent}>
            <div className='form-group mb-3'>
              <label>Name</label>
               <input type='text' className='form-control' name='name' onChange={this.handleInput} value={this.state.name} placeholder='name' />
            </div>
            <div className='form-group mb-3'>
            <label>Department</label>
               <input type='text' className='form-control' name='department' onChange={this.handleInput} value={this.state.department} placeholder='Department' />
            </div>
            <div className='form-group mb-3'>
              <label>Email</label>
               <input type='text' className='form-control' name='email' onChange={this.handleInput} value={this.state.email} placeholder='Email' />
            </div>
            <div className='form-group mb-3'>
            <label>Phone</label>
               <input type='text' className='form-control' name='phone' onChange={this.handleInput} value={this.state.phone} placeholder='Phone' />
            </div>
            <div className='form-group mb-3'>
               <button id='btn-id' type='submit' className='btn btn-success'>Update</button>
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

export default withParams(Editstudent);
