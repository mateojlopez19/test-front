import React from 'react';
import {Link} from 'react-router-dom';

const Login = (open, onClose) => {

  if(!open) return null;

  return (
    <div className='bg-[rgb(0,0,0,0.5)] fixed w-full h-[100vh] top-0 left-0' onClick={onClose}>
      <div className='w-3/4 mx-auto md:w-1/4 md:mx-auto md:my-20 mt-6'>
        <div className='grid grid-cols-1'>
          <form className='border-2 bg-[#1D4f15] w-full md:w-11/12 h-auto my-10 md:my-12 mx-auto rounded-3xl drop-shadow-lg'>
            <div className='w-full md:w-8/12 h-auto mt-3 mb-4 md:mb-6 md:mt-3 mx-auto'>
              <h3 className='text-center text-3xl font-bold text-white'>Bienvenido</h3>
            </div>
            <div class="mb-6 mx-auto w-4/5 mt-4">
              <label for="name" className="block mb-2 text-base font-medium text-white dark:text-gray-300">Correo electronico</label>
              <input type="text" id="name" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" required />
            </div>
            <div class="mb-8 mx-auto w-4/5 mt-4">
              <label for="name" className="block mb-2 text-base font-medium text-white dark:text-gray-300">Contraseña</label>
              <input type="text" id="name" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" required />
            </div>
            <div className="mb-6 mx-auto w-4/5 flex justify-center">
              <button type="submit" className="text-black  bg-gray-300  hover:bg-zinc-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-base w-full sm:w-auto px-8 py-2.5 text-center">Ingresar</button>
            </div>
            <div className="mb-8 mx-auto w-4/5 text-center text-white hover:text-[#d8ddd7]">
              <h4><Link to='/registrarse'>¿Aún no está registrado?</Link></h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
