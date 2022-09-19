import { Formik } from 'formik';
import React from 'react'
import './Login.css';

//1.Submit Function
const loginSubmit=(formdata)=>{
  console.log(formdata)
  //instructions to store data in database
  }

  //2.locate/create the form  tag


  //3.use formik on form tag




const Login = () => {
  return (
    <div className='harsh'>
    <div className='mycard'>
     <h1 style={{textAlign:'center'}}>Login Page</h1>
      <hr />
      <Formik initialValues={{email:'',password:''}} onSubmit={loginSubmit}>
      {
        ({values,handleSubmit,handleChange})=>(  
     <form onSubmit={handleSubmit}t>
     <center> 
      <label htmlFor=""><h1>Username</h1></label>     
     <input type="email"
      id="email" 
       value={values.email}
       onChange={handleChange} 
       placeholder="Username" />
     </center>
     <br /><br />
     <center>
     <label htmlFor=""><h1>Password </h1></label>
     <input type="password" 
        id="password" 
       value={values.password}
       onChange={handleChange} 
      
     placeholder="Enter Your Password"/></center>
     <br /><br /><center>
        <button class="mybtn">Submit</button></center>
        </form>)
      }
      </Formik>
      
     {/* </center> */}
    </div>
    </div>
    )
}

export default Login