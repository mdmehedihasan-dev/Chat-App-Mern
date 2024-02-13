import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";

const SingUp = () => {

  const [inputs , setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  })

  const handleSubmit = (e)=>{
     e.preventDefault();
     console.log(inputs)
  }



  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sing Up
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} >
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
            value={inputs.fullName}
            onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}
             type="text" placeholder="full name" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">userame</span>
            </label>
            <input
             value={inputs.username}
             onChange={(e)=> setInputs({...inputs, username:e.target.value})}
             type="text" placeholder="username" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
             value={inputs.password}
             onChange={(e)=> setInputs({...inputs, password:e.target.value})} 
             type="password" placeholder="password" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input 
             value={inputs.confirmPassword}
             onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})} 
             type="password" placeholder="confirm password" className="w-full input input-bordered h-10" />
          </div>

          {/* gender checkbox  */}
          <GenderCheckBox/>


          <Link to='/login'
            href="#"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            Already have an Account ?
          </Link>

          <button className="btn btn-block btn-sm mt-2">Sing Up</button>




        </form>
      </div>
    </div>
  );
};

export default SingUp;
