/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSingup";

const SingUp = () => {

  const [inputs , setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  })

  const {loading,singup} = useSignup()

  // for gender 
  const handleCheckBok = (gender) =>{
    setInputs({...inputs,gender})

  }


 
  const handleSubmit = async (e)=>{
     e.preventDefault();
     await singup(inputs)
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
          <GenderCheckBox onCheckboxChange={handleCheckBok} selectedGender={inputs.gender} />


          <Link to='/login'
            href="#"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            Already have an Account ?
          </Link>

          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {
              loading ? 
              <span className="loading loading-spinner"></span> : "Sing Up"
            }
          </button>




        </form>
      </div>
    </div>
  );
};

export default SingUp;
