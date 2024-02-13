/* eslint-disable react/no-unescaped-entities */
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link to="/singup"
            href="#"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            Don't have an Account ?
          </Link>

          

          <button className="btn btn-block btn-sm mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;