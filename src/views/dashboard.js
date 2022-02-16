import React from "react";
import Header from "../components/_header";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div class="table w-full p-5  ">
        <h1 className="text-4xl font-bold text-center">Alumnos</h1>
        <table class="w-full border mt-4">
          <thead>
            <tr class="bg-gray-50 border-b">
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Nombre</div>
              </th>
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Matricula</div>
              </th>
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Email</div>
              </th>
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Estatus TSU</div>
              </th>
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Estatus ING</div>
              </th>
              <th class="p-4 border-r  text-sm font-medium text-gray-500">
                <div class="flex items-center justify-center">Accion</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td class="p-4 border-r">Jesus Mendoza Silva</td>
              <td class="p-4 border-r">19190515</td>
              <td class="p-4 border-r">tic191901515@gmail.com</td>
              <td class="p-4 border-r">
                <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input
                    type="submit"
                    className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white"
                    value="Guardar"
                  ></input>
                </form>
              </td>
              <td class="p-4 border-r">
              <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input type="submit" className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white" value="Guardar"></input>
                </form>
              </td>
              <td>
                <a
                  href="#"
                  class="bg-blue-500 p-4 text-white hover:shadow-lg text-xs "
                >
                  Editar
                </a>
                <a
                  href="#"
                  class="bg-red-500 p-4 text-white hover:shadow-lg text-xs"
                >
                  Eliminar
                </a>
              </td>
            </tr>
            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td class="p-4 border-r">Jesus Mendoza Silva</td>
              <td class="p-4 border-r">19190515</td>
              <td class="p-4 border-r">tic191901515@gmail.com</td>
              <td class="p-4 border-r">
                <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input
                    type="submit"
                    className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white"
                    value="Guardar"
                  ></input>
                </form>
              </td>
              <td class="p-4 border-r">
              <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input type="submit" className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white" value="Guardar"></input>
                </form>
              </td>
              <td>
                <a
                  href="#"
                  class="bg-blue-500 p-4 text-white hover:shadow-lg text-xs "
                >
                  Editar
                </a>
                <a
                  href="#"
                  class="bg-red-500 p-4 text-white hover:shadow-lg text-xs"
                >
                  Eliminar
                </a>
              </td>
            </tr>
            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td class="p-4 border-r">Jesus Mendoza Silva</td>
              <td class="p-4 border-r">19190515</td>
              <td class="p-4 border-r">tic191901515@gmail.com</td>
              <td class="p-4 border-r">
                <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input
                    type="submit"
                    className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white"
                    value="Guardar"
                  ></input>
                </form>
              </td>
              <td class="p-4 border-r">
              <form>
                  <select name="cars" id="cars">
                    <option value="curso">En curso</option>
                    <option value="terminado">Terminado</option>
                  </select>
                  <input type="submit" className="mx-2 p-2 cursor-pointer bg-[#1f4723] text-white" value="Guardar"></input>
                </form>
              </td>
              <td>
                <a
                  href="#"
                  class="bg-blue-500 p-4 text-white hover:shadow-lg text-xs "
                >
                  Editar
                </a>
                <a
                  href="#"
                  class="bg-red-500 p-4 text-white hover:shadow-lg text-xs"
                >
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
