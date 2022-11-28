import React,{useState} from "react";
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";
import {useForm} from "react-hook-form";


function App() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [Retypepassword,setretypePassword] = useState("");
  const [Fname,setFname] = useState("");
  const [Lname,setLname] = useState("");


  const onSubmit=(data) =>{
    
    console.log(data);

    var x="";
    if (Password!==Retypepassword) {
      x = "password Do not Match";
    } else {
      x= "Success";
    }
    
    console.log("Email:",Email,"password:",Password,"Re-type password:",Retypepassword,"Fname:",Fname,"Lname:",Lname,"Message:",x);
    
  }
 
  return (
      <div className="apps">
        <div className="card">
            <br></br>
              <h3 className="card-title"> <b>Responsive Registration</b> <br></br> <b>Form</b></h3><br></br>
                <form className="container" onSubmit={handleSubmit(onSubmit)}>

                  <div className="input-group mb-4">
                    <span className="input-group-text"><MdEmail/></span>
                    <input type="email" className={`form-control ${errors.email?"is-invalid":""}`} {...register("email", { required: true })} defaultValue={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="email"></input>    
                    {/* {(errors.email && errors.email.type === 'required') ? <div className="invalid-feedback">This field is required</div> : ''} */}
                    {errors.email && <p className="text-danger">email is required.</p>}
                  </div>
                   {/* {errors.email && <span>This field is required</span>} */}
                   {/* {errors.email?.type === 'required' && <p role="alert" style={{color:"red"}}>email is required</p>} */}
                   


                  <div className="input-group mb-4">
                    <span className="input-group-text"><FaLock/></span>
                    <input type="password" className={`form-control ${errors.password?"is-invalid":""}`} {...register("password", { required: true })}defaultValue={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name="password"></input>

                  </div>
                  {errors.password && <p className="text-danger">password is required.</p>}
        
                  <div className="input-group mb-4">
                    <span className="input-group-text"><FaLock/></span>
                    <input type="password" className={`form-control ${errors.confirmpassword?"is-invalid":""}`}  {...register("confirmpassword", { required: true })} defaultValue={Retypepassword} onChange={(e)=>setretypePassword(e.target.value)} placeholder="Re-Type Password" name="confirmpassword"></input>
                
                  </div>
                  {errors.confirmpassword && <p className="text-danger">confirm your password.</p>}

                 <div className="row">
                     <div className="input-group mb-4 col">
                       <span className="input-group-text"><FaUser/></span>
                       <input type="text" className={`form-control ${errors.firstname?"is-invalid":""}`} {...register("firstname", { required: true })} defaultValue={Fname} onChange={(e)=>setFname(e.target.value)} placeholder="First Name" name="firstname"></input>
                     </div>
                     
                     

                     <div className="input-group mb-4 col">
                       <span className="input-group-text"><FaUser/></span>
                       <input type="text" className={`form-control ${errors.lastname?"is-invalid":""}`} {...register("lastname", { required: true })} defaultValue={Lname} onChange={(e)=>setLname(e.target.value)} placeholder="Last Name" name="lastname"></input>
                     </div>
                     {errors.lastname && <p className="text-danger">enter your Lastname.</p>}

                  </div>

                 <div className="d-flex gap-3">
                    <div className="form-check">
                      <input type="radio" {...register("gender",{ required: true })} className="form-check-input" value="male"/>
                      <label className="form-check-label">
                        Male
                      </label>
                    </div>

                    <div className="form-check">
                      <input type="radio" {...register("gender",{ required: true })} className="form-check-input" value="female"/>
                      <label className="form-check-label">
                        Female
                      </label>
                    </div>
                </div>
                 
                 <br></br>
                 
                  <div>
                     <select {...register("country", { required: true })} className="form-select" name="country">
                         <option>Select your country</option>
                         <option>India</option>
                         <option>USA</option>
                         <option>UK</option>
                     </select>
                  </div>
                  <br></br>

                  <div>
                     <div className="form-check d-flex flex gap-2">
                       <input type="checkbox" {...register("t&c",{ required: true })} className="form-check-input" value="yes" id="flexCheckDefault"/>
                       <label className="form-check-label">
                         I agree with terms and conditions
                       </label>
                     </div>
                     <div className="form-check d-flex flex gap-2">
                       <input type="checkbox" {...register("newsletter",{ required: true })} className="form-check-input" value="yes" id="flexCheckChecked" checked/>
                       <label className="form-check-label" >
                         I want to recieve the news letter
                       </label>
                     </div>
                  </div>
                  <br></br>


              <div className="d-grid gap-2">
               <button className="btn btn-warning" type="submit" >Register</button>
             </div>
             <br></br>
      </form>
    </div>
  </div>
  )
}

export default App;
