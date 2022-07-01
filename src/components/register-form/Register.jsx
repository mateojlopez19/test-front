import React from 'react'

const Register = () => {
  return (
    <div className='w-auto mx-2 md:w-4/5 md:mx-auto md:my-8 mt-96'>
      <div className='grid grid-cols-1 my-6 md:grid-cols-1 md:mt-8 md:mb-12'>
        <div className='w-full md:w-8/12 h-auto mt-3 mb-4 md:mb-12 md:mt-3 mx-auto'>
          <h1 className='text-center text-5xl font-bold text-[#1D4f15]'>Formulario de registro</h1>
        </div>
        <form className='border-2 bg-[#f1f1f1] w-full md:w-11/12 h-auto my-4 md:my-6 mx-auto rounded-3xl drop-shadow-lg'>
          <div className="mb-6 mx-auto w-4/5 mt-16">
            <label for="name" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Nombre*</label>
            <input type="text" id="name" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="lastName" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Apellidos*</label>
            <input type="text" id="lastName" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div class="mb-6 mx-auto w-4/5">
            <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Correo electronico*</label>
            <input type="email" id="email" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div class="mb-6 mx-auto w-4/5">
            <label for="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Contraseña*</label>
            <input type="password" id="password" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Confirmar contraseña*</label>
            <input type="password" id="password" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="option-disabled" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Departamento*</label>
            <select id="option-disabled" className="bg-gray-50 border border-gray-300 focus:none text-gray-900 text-sm rounded-lg block w-full p-2.5 backdrop:dark:text-white dark:focus:ring-blue-400">
              <option>Caldas</option>
            </select>
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="municipalities" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Municipio*</label>
            <select id="municipalities" className="bg-gray-50 border border-gray-300 focus:none text-gray-900 text-sm rounded-lg block w-full p-2.5 backdrop:dark:text-white dark:focus:ring-blue-400 required">
              <option>Manizales</option>
              <option>Villamaria</option>
              <option>Neira</option>
            </select>
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="address" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Direccion*</label>
            <input type="text" id="address" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6 mx-auto w-4/5">
            <label for="municipalities" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Tipo de documento*</label>
            <select id="municipalities" className="bg-gray-50 border border-gray-300 focus:none text-gray-900 text-sm rounded-lg block w-full p-2.5 backdrop:dark:text-white dark:focus:ring-blue-400 required">
              <option>Cedula</option>
              <option>Tarjeta de identidad</option>
              <option>Pasaporte</option>
            </select>
          </div>
          <div className="mb-8 mx-auto w-4/5">
            <label for="document" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Numero de documento*</label>
            <input type="number" id="document" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-green-400 dark:shadow-sm-light" required />
          </div>
          <div className="mb-8 mx-auto w-4/5">
            <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-[#1D4f15] bg-gray-100 border-gray-300 rounded focus:bg-[#1D4f15] dark:focus:bg-[#1D4f15] dark:ring-offset-green-700 focus:ring-2 dark:bg-[#1D4f15] dark:border-gray-600" />
            <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Al registrarme acepto <a href="..." className="text-[#1D4f15] hover:underline dark:text-blue-500">terminos y condiciones</a>.</label>
          </div>


          <div class="mb-12 mx-auto w-4/5 flex justify-center mt-4">
            <button type="submit" className="text-white  bg-[#1D4f15]  hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
