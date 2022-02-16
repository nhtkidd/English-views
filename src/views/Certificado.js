import React from "react";
import Header from "../components/_header";

const Certificado = () => {
  return (
    <div className="bg-white w-full h-screen">
      <Header></Header>
      <div className=" mt-0 w-full h-screen lg:h-2/4 lg:flex justify-center pt-[5%] gap-4  ">
        <div className=" lg:w-[25%] lg:h-full p-2 ">
        <div className="w-full h-full rounded-xl bg-white pb-5 border border-gray-500 lg:hover:scale-110 transition ease-in text-center  ">
            <h1 className=" font-bold p-5 text-2xl ">Certificacion TSU </h1>
            <h1 className="text-6xl p-10">
              <ion-icon name="document-text-outline"></ion-icon>
            </h1>
            <p className="p-5 text-xl">Obten tu certificado de TSU</p>

            <button className="bg-[#3bb046] hover:bg-[#1f4723] hover:text-white transition ease-out p-3 w-[70%]">Ver ahora</button>
           
       
          </div>
        </div>
        <div className=" lg:w-[25%] lg:h-full p-2 ">
          <div className="w-full h-full rounded-xl bg-white pb-5 border border-gray-500 lg:hover:scale-110 transition ease-in text-center  ">
            <h1 className=" font-bold p-5 text-2xl ">Certificacion Ingenieria </h1>
            <h1 className="text-6xl p-10">
              <ion-icon name="document-text-outline"></ion-icon>
            </h1>
            <p className="p-5 text-xl">Obten tu certificado de Ingenieria</p>

            <button className="bg-[#3bb046] hover:bg-[#1f4723] hover:text-white transition ease-out p-3 w-[70%]">Ver ahora</button>
       
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificado;
