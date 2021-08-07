import { useState, useEffect } from 'react'


import React from 'react'

const useForm = validate  => {
   const[values,setValues]=useState({
       username: '', 
       email:'', 
       password:'', 
       password2:''

   });

   const[errors, setErrors]= useState({});
   const[Submit , setSubmit]= useState(false); 

  const handleChange=e =>{
    const{name,value}=e.target;

      setValues({
          ...values,
         [name] : value
      });
  };
const handleSubmit=e =>{
    e.preventDefault();
    
    setErrors(validate(values));
    setSubmit(true); 

};

  return{handleChange, values,handleSubmit,errors}

};

   
export default useForm;