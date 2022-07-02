import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

class Student extends Component 
{
state = {
  students : [],
  loading : true,
  error_list: [],
}
  async componentDidMount (){
    const res = await axios.get('http://127.0.0.1:8000/api/students');
    if(res.data.status === 201){
     
        this.setState({
          students: res.data.students,
          loading : false,
        });
    }
  }
  
deleteStudent = async (e, id) => {
  try {
    const clickdelete = e.currentTarget;
    clickdelete.innerText = 'Delate';
   const res = await axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}`); 
       if(res.data.status === 200){
            clickdelete.closest('tr').remove();
            //console.log(res.data.message);
            swal({
              title: "Delete!",
              text: res.data.message,
              icon: "success",
              button: "Ok",
            });
      }
  } catch (error) {
    
  }
 
}
  render (){
    var student_html = "";
    if(this.state.loading){
    student_html = <tr><td colSpan={7}><h2>Loading ..........</h2></td></tr>;

    }else {
      student_html = this.state.students.map((item)=>{
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.department}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <Link to={`edit-student/${item.id}`} className='btn btn-success'>Edit</Link>
            </td>
            <td>
              <button onClick={(e) => this.deleteStudent(e, item.id)} type='button' className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        );
      });
    }
      return (
        <div className='container'>
         <div className='row'> 
         <div className='col-lg-12'>
         <div className='card'>
         <div className='card-header'>
        <h2>
        <Link to={'/'}>Student</Link>
            
            <Link to={'add-student'} className='btn btn-success float-end'>Add Student</Link>
        </h2>

        </div>
        <div className='card-body'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {student_html}
  </tbody>
</table>
        </div>
        </div>
        </div>
        </div>
        </div>
      );
  }
}

export default Student;