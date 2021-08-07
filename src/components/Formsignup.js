import React from 'react'; 
import { Link } from 'react-router-dom';
import useForm from './useForm'; 
import validate from './validateform';
import './form.css'; 



const Formsignup = () => {
    const{handleChange,values,handleSubmit,errors}=useForm(validate);

    return (
   
        <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit} >
            <h1>Get started with us today!</h1>


            <div className="form-inputs">
                <label htmlfor="username" className="form-label">
                  Usename 
                </label>
                <input id="username" type="text" name="username" className='form-input' placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username&& <p>{errors.username}</p>}
            </div>
     
            
        



            <div className="form-inputs">
                <label htmlfor="email" className="form-label">
                   Email
                </label>
                <input id="email" type="email" name="email" className='form-input' placeholder="Enter your email"
                     value={values.email}
                    onChange={handleChange}
                />
                   {errors.email&& <p>{errors.email}</p>}
            </div>


            <div className="form-inputs">
            <label for="university-select" calssName="form-label">Select your university:</label>

               <select name="university" id="uni-select">
                   <option value="">--Please choose an option--</option>
                <option value="TBS">Tunis Business School </option>
                 <option value="Other">Other</option>
                 </select>
               </div>


               <div className="form-inputs">
                <label htmlfor="password" className="form-label">
                   Password 
                </label>
                <input id="password" type="password" name="password" className='form-input' placeholder="Enter your password"
                     value={values.password}
                    onChange={handleChange}
                />
                 {errors.password&& <p>{errors.password}</p>}
            </div>


            <div className="form-inputs">
                <label htmlfor="password2" className="form-label">
                   Confirm your password
                </label>
                <input id="password2" type="password" name="password2" className='form-input' placeholder="Confirm your password"
                         value={values.password2}
                    onChange={handleChange}
                />
                 {errors.password2&& <p>{errors.password2}</p>}
            </div>

           <button classNme='form-input-btn' type='submit'>
               Sign up 
           </button>

           <span className="form-input-login">
               Already have an account? Login<Link to ="/login"> here </Link>
           </span>




    
            </form>



        </div>

       

     
        
    )
}

export default Formsignup

