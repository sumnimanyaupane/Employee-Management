import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator=useNavigate();

  useEffect(() => {
   getAllEmployees();
  }, []);

  function getAllEmployees(){
    listEmployees()
    .then((response) => {
      const data = response.data;
      if (Array.isArray(data)) {
        setEmployees(data);
      } else {
        console.error("API returned data in an unexpected format:", data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  function addNewEmployee(){
navigator('/add-employee')
  }


function updateEmployee(id){
navigator(`/edit-employee/${id}`)
}

function removeEmployee(id){
deleteEmployee(id).then((reponse)=>{
  getAllEmployees();

}).catch(error=>{
  console.error(error);
})
}


  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) &&
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>update</button>
                  <button className='btn btn-danger ' onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>

                </td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
