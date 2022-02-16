import React from "react";
import { Link } from "react-router-dom";
import './style/index.css';

const Login = () => {
  return (
    <div className="padre  w-full h-screen flex justify-center items-center">
      <div className=" bg-white w-[90%]  h-auto  md:w-[70%] 2xl:w-[50%] lg:h-[50vh] lg:flex rounded-xl ">
        <div className="  hidden  lg:w-[50%] lg:flex justify-center items-center ">
          <div className=" w-[60%] h-[30vh] flex ">
          <img className="w-[100%]" src={require("../assets/utsvlogo.png")}></img>
          </div>
        </div>
        <div className=" lg:w-[50%] h-full">
          <form className=" p-10 lg:mt-10">
            <h1 className="my-5 text-4xl font-bold  ">Inicia sesión</h1>
            <label>
              <input
                placeholder="Usuario"
                type="text"
                name="usuario"
                className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </label>
            <label>
              <input
                placeholder="Contraseña"
                type="text"
                name="usuario"
                className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </label>
            <label>
              <input
                type="submit"
                className="cursor-pointer block w-full  bg-[#1f4723] text-white rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </label>
           <h1 className="font-bold">No tienes una cuenta? <Link to={"/sing-in"}><a className="text-red-500">Crea una </a> </Link></h1>
          </form>
         
        </div>
      </div>
    </div>
  );
};
export default Login;
