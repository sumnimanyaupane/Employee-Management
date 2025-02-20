import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate ,useParams} from 'react-router-dom';
import { getAllDepartments } from '../services/DepartmentService';
// import {useNavigate} from 'react-router-dom';



const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

const [departmentId,setDepartmentId] = useState('')
const [departments,setDepartments]=useState([])


useEffect(()=>{
getAllDepartments().then((response)=>{
  setDepartments(response.data);
}).catch(error=>{
  console.error(error);
})
},[])


const{id}=useParams();

  const[errors,setErrors]=useState({
    firstName:'',
    lastName:'',
    email:'',
    department:''
  })


const navigator =useNavigate();


useEffect(()=>{
if(id){
    getEmployee(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email); 
        setDepartmentId(response.data.departmentId);
    }).catch(error =>{
        console.log(error);
    })
}
} ,[id])


  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault(); 

if(validateForm()){
    const employee = { firstName, lastName, email ,departmentId};
    console.log('Saved Employee:', employee);
    if(id){
        updateEmployee(id,employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
        }).catch(error=>{
            console.error(error);
        })
    }else{
        createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
    
        }) .catch(error=>{
            console.error(error);
        })
    }
     
}
  
};


//form validation
  function validateForm(){
    let valid=true;
    const errorsCopy={... errors}


    if(firstName.trim()){
        errorsCopy.firstName='';
        
    }else{
        errorsCopy.firstName='first name is required';
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName='';
        
    }else{
        errorsCopy.lastName='last name is required';
        valid = false;
    }

    if(email.trim()){
        errorsCopy.email='';
        
    }else{
        errorsCopy.email='email is required';
        valid = false;
    }
    if(departmentId){
      errorsCopy.department='';
    }else{
      errorsCopy.department='select department';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;

  }


  function pageTitle(){
if(id){
    return <h2 className='text-center'>update employee</h2>
}else{
  return  <h2 className='text-center'>Add Employee</h2>
}
  }


  return (
    <div className='container'>
      <br />
      <div className='row justify-content-center'>
        <div className='card col-md-6'>
         {
            pageTitle()
         }
          <div className='card-body'>
            <form onSubmit={saveOrUpdateEmployee}>


              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter employee first name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${ errors.firstName ? 'is-invalid' : '' }`}
                  onChange={handleFirstName}
                >
                </input>
                {errors.firstName  && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>


              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter employee last name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${ errors.lastName ? 'is-invalid' : '' }`}
                  onChange={handleLastName}
                >
                </input>
                {errors.lastName  && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>



              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='email' // Changed to type='email' for validation
                  placeholder='Enter employee email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ? 'is-invalid' : '' }`}
                  onChange={handleEmail}
                >
                </input>
                {errors.email  && <div className='invalid-feedback'>{errors.email}</div>}
              </div>


              <div className='form-group mb-2'>
                <label className='form-label'>select Department</label>
                <select
                  value={departmentId || ''}
                  className={`form-control ${ errors.department ? 'is-invalid' : '' }`}
                  onChange={(e)=>setDepartmentId(e.target.value)}
                >

                  <option value="select Department">select department</option>
                  {
                    departments.map( (department)=>(
                      <option key={department.id} value={department.id} >{department.departmentName}
                       </option>
                    )
                  )}
                </select>
                {errors.department && <div className='invalid-feedback'>{errors.department}</div>}
              </div>

              <button type='submit' className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
